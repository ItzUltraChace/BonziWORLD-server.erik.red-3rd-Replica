import { range } from "./helpers.js";
const BonziData = {
    size: {
        x: 200,
        y: 160
    },
    sprite: {
        frames: { width: 200, height: 160 },
        animations: {
            idle: [0],
            surfIn: range(277, 302),
            surfOut: range(16, 38),
            backflip: range(331, 343),
            grinStart: [...range(182, 189), "grinStill"],
            grinStill: [184, "grinStill"],
            grinEnd: [184, 183, 182],
            sadStart: [...range(237, 241), "sadStill"],
            sadStill: [241, "sadStill"],
            sadEnd: [...range(240, 237)]
            /*
            surf_across_fwd: [1, 8, "surf_across_still", 1],
            surf_across_still: 9,
            surf_across_back: {
                frames: range(8, 1),
                next: "idle",
                speed: 1
            },

            clap_fwd: [10, 12, "clap_still", 1],
            clap_still: [13, 15, "clap_still", 1],
            clap_back: {
                frames: range(12, 10),
                next: "idle",
                speed: 1
            },

            gone: 39,

            shrug_fwd: [40, 50, "shrug_still", 1],
            shrug_still: 50,
            shrug_back: {
                frames: range(50, 40),
                next: "idle",
                speed: 1
            },

            earth_fwd: [51, 57, "earth_still", 1],
            earth_still: [58, 80, "earth_still", 1],
            earth_back: [81, 86, "idle", 1],

            // TODO: ADD BLINK
            look_down_fwd: [87, 90, "look_down_still", 1],
            look_down_still: 91,
            look_down_back: {
                frames: range(90, 87),
                next: "idle",
                speed: 1
            },

            // TODO: ADD BLINK
            lean_left_fwd: [94, 97, "lean_left_still", 1],
            lean_left_still: 98,
            lean_left_back: {
                frames: range(97, 94),
                next: "idle",
                speed: 1
            },

            beat_fwd: [101, 103, "beat_still", 1],
            beat_still: [104, 107, "beat_still", 1],
            beat_back: {
                frames: range(103, 101),
                next: "idle",
                speed: 1
            },

            cool_fwd: [108, 124, "cool_still", 1],
            cool_still: 125,
            cool_back: {
                frames: range(124, 108),
                next: "idle",
                speed: 1
            },

            cool_right_fwd: [126, 128, "cool_right_still", 1],
            cool_right_still: 129,
            cool_right_back: {
                frames: range(128, 126),
                next: "idle",
                speed: 1
            },

            cool_left_fwd: [131, 133, "cool_left_still", 1],
            cool_left_still: 134,
            cool_left_back: {
                frames: range(133, 131),
                next: "cool_still",
                speed: 1
            },

            cool_adjust: {
                frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
                next: "cool_still",
                speed: 1
            },

            present_fwd: [137, 141, "present_still", 1],
            present_still: 142,
            present_back: {
                frames: range(141, 137),
                next: "idle",
                speed: 1
            },

            look_left_fwd: [143, 145, "look_left_still", 1],
            look_left_still: 146,
            look_left_back: {
                frames: range(145, 143),
                next: "idle",
                speed: 1
            },

            look_right_fwd: [149, 151, "look_right_still", 1],
            look_right_still: 152,
            look_right_back: {
                frames: range(151, 149),
                next: "idle",
                speed: 1
            },

            lean_right_fwd: {
                frames: range(158, 156),
                next: "lean_right_still",
                speed: 1
            },
            lean_right_still: 155,
            lean_right_back: [156, 158, "idle", 1],

            praise_fwd: [159, 163, "praise_still", 1],
            praise_still: 164,
            praise_back: {
                frames: range(163, 159),
                next: "idle",
                speed: 1
            },

            grin_fwd: [182, 189, "grin_still", 1],
            grin_still: 184,
            grin_back: {
                frames: range(184, 182),
                next: "idle",
                speed: 1
            },

            */
        }
    },
    toIdle: {
        grinStart: "grinEnd",
        grinStill: "grinEnd",
        sadStart: "sadEnd",
        sadStill: "sadEnd"
    }
};
export default BonziData;
//# sourceMappingURL=BonziData.js.map