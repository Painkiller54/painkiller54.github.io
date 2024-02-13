var map = {
    title: "Gear Shift",
    song: "env2",
    maker: "GoldenLion",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00014, -3.14986, 0.00014], [0, 0, 0], [6.14, 4.54, 7.6], "-1.0", 0, 0, 0.6, true, false, false, false);
        a.e([0.00021, 3.06021, 0.00021]);
    },
    post: function() {
        cc.set_monkey("light.intensity", 0.0);
        cc.set_monkey("radius", 0.0);
        cc.set_monkey("camera.maxZ", 1.0);
        cc.set_monkey("jumpHeight", 3.0);
        cc.set_monkey("speed", default_speed * 0.0);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00014, -3.14986, 0.00014], [0, 0, 0], [6.14, 4.54, 7.6]);
        a.re('E0', [0.00021, 3.06021, 0.00021], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}