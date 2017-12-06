
class bugyv{
  constructor(){
    this.keyVal = new Array();
    this.keyPressed = new Array();
    for ( var i=0;i<12;i++){this.keyVal.push(0)};
    this.beat = 0;
    this.notes = 0;
    var c = document.getElementById("bugyv");
    this.ctx = c.getContext("2d");
    this.time = 0;

    this.audioCtx = new (window.AudioContext || window.webkitAudioContext);
    this.sine = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();
    this.sine.connect(this.gainNode);
    this.sine.start();
    this.gainNode.connect(this.audioCtx.destination);

  }

    log( key, time ){
        this.keyVal[key]=!this.keyVal[key];
        this.time = time;
        this.ctx.fillStyle = 'rgb(18, 60, 00)';
        switch ( key ){
            case 0:
                this.ctx.fillRect(0,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(115,310,110,210);
                this.ctx.fillStyle = 'red';
                break;
            case 2:
                this.ctx.fillRect(172,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(115,310,110,210);
                this.ctx.fillRect(285,310,120,210);
                this.ctx.fillStyle = 'red';break;
            case 4:
                this.ctx.fillRect(343,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(285,310,120,210);
                this.ctx.fillStyle = 'red';break;
            case 5:
                this.ctx.fillRect(514,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(630,310,120,210);
                this.ctx.fillStyle = 'red';break;
            case 7:
                this.ctx.fillRect(685,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(630,310,120,210);
                this.ctx.fillRect(800,310,120,210);
                this.ctx.fillStyle = 'red';break;
            case 9:
                this.ctx.fillRect(856,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(970,310,120,210);
                this.ctx.fillRect(800,310,120,210);
                this.ctx.fillStyle = 'red';break;
            case 11:
                this.ctx.fillRect(1027,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(970,310,120,210);
                this.ctx.fillStyle = 'red';
                break;
            case 1:
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(116,310,120,210);break;
            case 3:
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(287,310,120,210);break;
            case 6:
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(630,310,120,210);break;
            case 8:
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(800,310,120,210);break;
            case 10:
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(970,310,120,210);break;
        }


    }
    generateNote(freq){
      this.note = new Note(freq,this.keyVal[this.key],this.time);
      this.sine.frequency.value = freq;

    }
    updatePiano(key,time){
        this.keyVal[key]=!this.keyVal[key];
        this.ctx.fillStyle = 'rgb(200,30,30)';
        switch ( key ){
            case 0:
                this.ctx.fillRect(0,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(115,310,110,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(261);
                break;
            case 2:
                this.ctx.fillRect(171,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(115,310,110,210);
                this.ctx.fillRect(285,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(293);
                break;
            case 4:
                this.ctx.fillRect(342,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(285,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(329);
                break;
            case 5:
                this.ctx.fillRect(513,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(630,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(349);
                break;
            case 7:
                this.ctx.fillRect(684,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(630,310,120,210);
                this.ctx.fillRect(800,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(415);
                break;
            case 9:
                this.ctx.fillRect(855,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(970,310,120,210);
                this.ctx.fillRect(800,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(440);
                break;
            case 11:
                this.ctx.fillRect(1026,310,170,310);
                this.ctx.fillStyle = 'black';
                this.ctx.fillRect(970,310,120,210);
                this.ctx.fillStyle = 'red';
                this.generateNote(492);
                break;
            case 1:

                this.ctx.fillRect(115,310,120,210);
                this.generateNote(277);
                break;
            case 3:
                this.ctx.fillRect(285,310,120,210);
                this.generateNote(311);
                break;
            case 6:
                this.ctx.fillRect(630,310,120,210);
                this.generateNote(392);
                break;
            case 8:
                this.ctx.fillRect(800,310,120,210);
                this.generateNote(415);
                break;
            case 10:
                this.ctx.fillRect(970,310,120,210);
                this.generateNote(466);
                break;
        }

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
    }


}

class Note {
  constructor(freq,note,time) {
    this.note = note;
    this.frequency = freq;
    this.time = time;
  }
}