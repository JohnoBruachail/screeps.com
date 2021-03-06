module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == false && creep.carry == 0) {
            // switch state
            creep.memory.working = true;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == true && creep.carry == creep.carryCapacity) {
            // switch state
            creep.memory.working = false;
        }

        if (creep.memory.working == true) {
            creep.scavengeMinerals();
        }
        // if creep is supposed to harvest energy from source
        else {
            creep.deliverMinerals();
        }
    }
};
