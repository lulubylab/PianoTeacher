

class pianoTeacher{
  constructor(){
    this.s= new createjs.Stage("pianoTeacher");
    var pt = new createjs.Shape();
    pt.graphics.beginFill("#086464").rect(0,0,1200,400);
    pt.x = pt.y = 0;
    this.s.addChild(pt);

    var options = new createjs.Shape();
    options.graphics.beginFill("#80A000").rect(1200,0,210,1410);
    options.x = options.y = 0;
    this.s.addChild(options);

    var piano = new createjs.Shape();
    pt.graphics.beginFill("#000000").rect(0,400,1200,220);
    pt.x = pt.y = 0;
    this.s.addChild(piano);

    var c = new createjs.Shape();
    c.graphics.beginStroke("black").beginFill("#FFFFFF").rect(0,400,171,220);
    c.x = pt.y = 0;
    this.s.addChild(c);

    var d = new createjs.Shape();
    d.graphics.beginFill("#FFFFFF").rect(171,400,171,220);
    d.x = pt.y = 0;
    this.s.addChild(d);

    var e = new createjs.Shape();
    e.graphics.beginStroke("black").beginFill("#FFFFFF").rect(342,400,171,220);
    e.x = pt.y = 0;
    this.s.addChild(e);

    var f = new createjs.Shape();
    f.graphics.beginStroke("black").beginFill("#FFFFFF").rect(513,400,171,220);
    f.x = pt.y = 0;
    this.s.addChild(f);

    var g = new createjs.Shape();
    g.graphics.beginStroke("black").beginFill("#FFFFFF").rect(684,400,171,220);
    g.x = pt.y = 0;
    this.s.addChild(g);

    var a = new createjs.Shape();
    a.graphics.beginStroke("black").beginFill("#FFFFFF").rect(855,400,171,220);
    a.x = pt.y = 0;
    this.s.addChild(a);

    var b = new createjs.Shape();
    b.graphics.beginStroke("black").beginFill("#FFFFFF").rect(1026,400,171,220);
    b.x = pt.y = 0;
    this.s.addChild(b);

    var cs = new createjs.Shape();
    cs.graphics.beginFill("#000000").rect(120,400,100,150);
    cs.x = pt.y = 0;
    this.s.addChild(cs);

    var ds = new createjs.Shape();
    ds.graphics.beginFill("#000000").rect(290,400,100,150);
    ds.x = pt.y = 0;
    this.s.addChild(ds);

    var fs = new createjs.Shape();
    fs.graphics.beginFill("#000000").rect(635,400,100,150);
    fs.x = pt.y = 0;
    this.s.addChild(fs);

    var gs = new createjs.Shape();
    gs.graphics.beginFill("#000000").rect(800,400,100,150);
    gs.x = pt.y = 0;
    this.s.addChild(gs);

    var as = new createjs.Shape();
    as.graphics.beginFill("#000000").rect(975,400,100,150);
    as.x = pt.y = 0;
    this.s.addChild(as);

    var keys = [ a,b,c,d,e,f,g,cs,ds,fs,gs];

    this.s.update();

  }

}
