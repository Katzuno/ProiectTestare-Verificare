import fs from "fs";

const conditions = {
    length: {
        min: 1,
        max: 3 * 10 ** 4
    },
    number: {
        min: -100,
        max: +100
    }
};

(async () => {
    let data = {
        'valid': {
            // C_111
            // C1_112
        },
        'invalid': {
            //C_2
            //C_3
        }
    };

    await fs.writeFileSync('test-data.json', JSON.stringify(data), (error) => {
        if (error) throw error;
    });

})();

