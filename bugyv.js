
class bugyv{
  constructor(){
    this.keyPressed = new Array();
    this.beat = 0;
    this.notes = new Array();
    this.frequency = 0;
    var c = document.getElementById("bugyv");
    this.ctx = c.getContext("2d");
    this.time = 0;
    this.warmth=0;
    this.gainValue =0;
    this.chords = new Array();
    this.isPlaying = false;
    this.switch1 = false;
    this.switch2 = false;
    this.sampler = new Sampler();
    this.oscMatrix = new Array();


    this.audioCtx = new (window.AudioContext || window.webkitAudioContext);
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.value = 0;

    for ( var i = 0; i < 12; i++){
      this.oscMatrix.push( this.audioCtx.createOscillator() );
      this.oscMatrix[i].connect(this.gainNode);
      this.oscMatrix[i].start();
      this.oscMatrix[i].frequency.value = 0;
    }


    this.gainNode.connect(this.audioCtx.destination);
    this.settings = new Array();

    }

    log( key, time ){
      this.switch2 = true;
      this.sampler.sample(key,time);
      if ( this.sampler.offset(key,time) ){
        this.chords.pop();
        if (this.chords.length ==0) {
          this.gainNode.gain.value =0;
        }
        this.chords.push(new Sound(this.notes[this.notes.length-1],time));
        this.sampler.chordSwitch(time);
      }
        this.time = time;
        this.switch2=false;
        this.oscMatrix[key].frequency.value =0;

    }
    makeSound(note,freq){
        this.oscMatrix[note].frequency.value =freq;

    }
    generateNote(freq,time, note){
      this.gainNode.gain.value =1;
      this.notes.push( new Note(freq,note,this.time));
      if ( this.chords.length == 0 ){
        this.chords.push(new Sound(this.notes[this.notes.length-1],time));
      }
      else{
        this.chords[this.chords.length-1].addNote(this.notes[this.notes.length-1]);
      }
      this.makeSound(note,freq);


    }
    updatePiano(key,time){
        this.switch1=true;
        this.sampler.sample(key,time);
        if (key == this.sampler.lastSample(-1)){
          return;
        }

        this.ctx.fillStyle = 'rgb(200,30,30)';
        switch ( this.sampler.lastSample(0) ){
            case 0:
                this.generateNote(261,time,0);
                break;
            case 2:
                this.generateNote(293,time,2);
                break;
            case 4:
                this.generateNote(329,time,4);
                break;
            case 5:
                this.generateNote(349,time,5);
                break;
            case 7:
                this.generateNote(415,time,7);
                break;
            case 9:
                this.generateNote(440,time,9);
                break;
            case 11:
                this.generateNote(492,time,11);
                break;
            case 1:
                this.generateNote(277,time,1);
                break;
            case 3:
                this.generateNote(311,time,3);
                break;
            case 6:
                this.generateNote(392,time,6);
                break;
            case 8:
                this.generateNote(415,time,8);
                break;
            case 10:
                this.generateNote(466,time,10);
                break;
        }
        this.switch1=false;

    }
    initPiano(){
        this.ctx.fillStyle = 'rgb(0, 60, 180)';
        this.ctx.fillRect(0, 0, 1410, 620);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1200,0,210,1410);
        this.ctx.fillStyle = 'rgb(18, 60, 00)';
        this.ctx.fillRect(0,310,171,310);
        this.ctx.fillRect(171,310,171,310);
        this.ctx.fillRect(342,310,171,310);
        this.ctx.fillRect(513,310,171,310);
        this.ctx.fillRect(684,310,171,310);
        this.ctx.fillRect(855,310,171,310);
        this.ctx.fillRect(1026,310,171,310);
        this.ctx.fillStyle = 'rgb(81, 00, 30)';
        this.ctx.strokeRect(0,310,171,310);
        this.ctx.strokeRect(171,310,171,310);
        this.ctx.strokeRect(342,310,171,310);
        this.ctx.strokeRect(513,310,171,310);
        this.ctx.strokeRect(684,310,171,310);
        this.ctx.strokeRect(855,310,171,310);
        this.ctx.strokeRect(1026,310,171,310);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(115,310,110,210);
        this.ctx.fillRect(285,310,110,210);
        this.ctx.fillRect(630,310,110,210);
        this.ctx.fillRect(800,310,110,210);
        this.ctx.fillRect(970,310,110,210);
        this.updateInterface(0);
    }
    updateInterface(delta){
      for ( var i = 0 ; i < delta.length; i ++){
        if ( delta[i] != 0 ){

        }}
        var freqGrad = this.ctx.createRadialGradient(150,150,100,0,0,1000);
        freqGrad.addColorStop(0,"red");
        freqGrad.addColorStop(1,"white");
        this.ctx.strokeStyle = freqGrad;
        this.ctx.beginPath();
        this.ctx.arc(150,150,100,0,2*Math.PI);
        this.ctx.stroke();


    }

}

class Sound {
  constructor(note,start){
    this.startTime = start;
    this.s = new Array();
    this.s.push(note);
    if (this.s.length ==1){
      this.root =  note;
    }
  }

  addNote(note){
    this.s.push(note);
  }
  frequency(){
      return this.s[this.s.length-1].getFreq();
  }

  getRoot(){
    return this.root;
  }


}

class Note {
  constructor(freq,note,time) {
    this.note = note;
    this.freq = freq;
    this.time = time;
  }
  getFreq(){
    return this.freq;
  }
}

class Sampler{
  constructor(key,time){
    this.size = 0;
    this.times = new Array();
    this.keys = new Array();
    this.times.push(time);
    this.keys.push(key);
    this.chordSwitches = new Array();
  }
  lastSample(index){
    return this.keys[this.size-index];
  }
  chordSwitch(time){
    this.chordSwitches.push(time);
  }
  sample(key,time){
    this.size++;
    this.times.push(time);
    this.keys.push(key);
  }
  offset(key,time){
    var cut = this.size-12;
    if ( cut < 0 ){
      cut = 0;
    }
    for ( var i = this.size-1,  j = this.size-1 ; i --,j--; i > cut,j>cut){
      if ( key == this.keys[i] ){

        return true;
      }
    }
    return false;
  }
}
