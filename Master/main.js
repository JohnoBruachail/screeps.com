//IMPORTS AND DEFINITIONS

require('prototype.creep');
require('prototype.tower')
require('prototype.spawn');

var name, towers;

//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//
//MAIN LOOP

module.exports.loop = function () {

    // check for memory entries of died creeps by iterating over Memory.creeps
    for(name in Memory.creeps) {
        // and checking if the creep is still alive
        if(!Game.creeps[name]) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //Game.creeps['Zoe'].suicide();


//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//

    // for each creeps
    for (let name in Game.creeps) {
        // run creep logic
        Game.creeps[name].runRole();
    }

//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//

    // find all towers
    towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // run tower logic
        tower.defend();
    }


//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//
//*********************************************************************************************************************************************************************//

    // for each spawn
    for (let spawnName in Game.spawns) {
        if(Game.spawns[spawnName].spawning == null) {
            // run spawn logic
            Game.spawns[spawnName].spawnCreepsIfNecessary();
        }
    }
};
