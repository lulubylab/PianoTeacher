function freq(note){
  switch ( note) {
    case 0:
    return 130;
    break;
    case 1:
    return 138;
    break;
    case 2:
    return 146;
    break;
    case 3:
    return 155;
    break;
    case 4:
    return 164;
    break;
    case 5:
    return 174;
    break;
    case 6:
    return 185;
    break;
    case 7:
    return 196;
    break;
    case 8:
    return 207;
    break;
    case 9:
    return 220;
    break;
    case 10:
    return 233;
    break;
    case 11:
    return 246;
    break;
    default:
    return 0;

  }

}
class bugyv{
  constructor(){
    this.keyPressed = new Array();
    this.beat = 0;
    this.notes = new Array();
    this.frequency = 0;
    var c = document.getElementById("bugyv");
    this.ctx = c.getContext("2d");
    this.warmth=0;
    this.chords = new Array();
    this.isPlaying = false;

    this.sampler = new Sampler();
    this.oscMatrix = new Array();
    this.gainMatrix = new Array();

    this.audioCtx = new (window.AudioContext || window.webkitAudioContext);


    for ( var i = 0; i < 4; i++){
      this.oscMatrix.push( this.audioCtx.createOscillator() );
      this.oscMatrix[i].start();
      this.oscMatrix[i].frequency.value = 0;
      this.gainMatrix.push (this.audioCtx.createGain());
      this.gainMatrix[i].gain.value = 0;
      this.oscMatrix[i].connect(this.gainMatrix[i]);
      this.gainMatrix[i].connect(this.audioCtx.destination);
    }


    this.settings = new Array();

    }

    log( key, time ){
      this.sampler.sample(key,time);
      if ( this.sampler.offset(key) ){
        this.chords.pop();
        if (this.chords.length ==0) {
        }
        this.chords.push(new Sound(this.notes[this.notes.length-1],time));
        this.sampler.chordSwitch(time);
      }
      console.log(freq(key));
      if ( freq(key) == this.oscMatrix[0].frequency.value){
        this.gainMatrix[0].gain.value = 0;
      }
      if ( freq(key) == this.oscMatrix[1].frequency.value){
        this.gainMatrix[1].gain.value = 0;
      }
      if ( freq(key) == this.oscMatrix[2].frequency.value){
        this.gainMatrix[2].gain.value = 0;
      }
      if ( freq(key) == this.oscMatrix[3].frequency.value){
        this.gainMatrix[3].gain.value = 0;
      }

    }
    makeSound(note){
        if ( this.gainMatrix[0].gain.value == 1){
          if (this.gainMatrix[1].gain.value == 1){
            if (this.gainMatrix[2].gain.value == 1){
              if (this.gainMatrix[3].gain.value == 1){
                console.log('too many voices');
              }
              else {
                    this.gainMatrix[3].gain.value = 1;
                    this.oscMatrix[3].frequency.value = freq(note);
                  }
                }
            else{
              this.gainMatrix[2].gain.value = 1;
              this.oscMatrix[2].frequency.value = freq(note);
            }
          }
          else {
            this.gainMatrix[1].gain.value = 1;
            this.oscMatrix[1].frequency.value = freq(note);
          }
        }
        else {
          this.gainMatrix[0].gain.value = 1;
          this.oscMatrix[0].frequency.value = freq(note);
        }
      }



    generateNote(time, note){
      this.notes.push( new Note(note,time));
      if ( this.chords.length == 0 ){
        this.chords.push(new Sound(this.notes[this.notes.length-1],time));
      }
      else{
        this.chords[this.chords.length-1].addNote(this.notes[this.notes.length-1]);
      }
      if (note < 12){
      this.makeSound(note);
}

    }
    updatePiano(key,time){
        this.sampler.sample(key,time);
        if (key == this.sampler.lastSample(-1)){
          return;
        }
        this.generateNote(time,key);
        this.ctx.fillStyle = 'rgb(200,30,30)';


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
  offset(key){
    var cut = this.size-12;
    if ( cut < 0 ){
      cut = 0;
    }
    for ( var i = this.size-1 ; i --; i > cut){
      if ( key == this.keys[i] ){
        return true;
      }
    }
    return false;
  }
}
