// // PROB 1 5/9
// Oh no, it's the zombie apocalypse and your town is being attacked by hordes of undead creatures! You need to create a fence that will keep them out. Luckily for you, you're an Tony Stark-level genius who has a robot that can do exactly what you ask of it. We just need to ask it with the correct wording...
// Write a function called buildFenceCommand that takes in 2 parameters. The first should be called numOfFencePosts, and the second should be called fencePostMaterial. You can expect that the first parameter's argument value will always be a positive integer, and the second parameter's argument value will always be a string representing a type of build material (i.e. iron, wood, etc.).
// Your function should log a string to the console that matches this format: "JARVIS is now building X fence post number ____", where the X represents the build material of the fence post, and the blank represents the current fence post number being built.
// Hint: Consider what type of JavaScript code will allow you to do something over and over again!


// function buildFenceCommand(numOfFencePostsNeeded, fencePostMaterial){
//     for(let numOfPostsBuiltSoFar = 1; numOfPostsBuiltSoFar < numOfFencePostsNeeded; numOfPostsBuiltSoFar++)
//     console.log("JARVIS is now building " + fencePostMaterial + "fence post number " + numOfPostsBuiltSoFar + ".")
// }
// buildFenceCommand(10, "wood")


// PROB 2 5/9
// Oh no, it doesn't look like the fence post is holding! It seems that there are just too many zombies, and they are threatening to overwhelm your defenses. Luckily for you, the writer of these JavaScript problems doesn't want you to die, so you also miraculously have a fleet of robot turrets at your command to help repel the attack.
// Write a function called directTurretDefenceCommand that takes in 2 parameters: The first should be called numOfTurrets (which will always be given a positive integer argument value), and the second should be called numOfDetectedZombies (which will always be given a positive integer argument value).
// Your function should log to the console a string that matches the following format: "Directing X turrets' fire to zombie # ____." where the X represents how many turrets you have, and the blank space represents the current zombie being targeted. Your function should run as many loop iterates as there are numOfDetectedZombies.

// function directTurretDefenceCommand(numOfTurrets, numOfDetectedZombies){
//     for(let numOfZombiesBlastedSoFar = 1; numOfZombiesBlastedSoFar <= numOfDetectedZombies; numOfZombiesBlastedSoFar++)
//     console.log("Directing " + numOfTurrets + " turrets' fire to zombie " + numOfZombiesBlastedSoFar + ".")
// }

// directTurretDefenceCommand(10, 15)

// PROB 3 5/9
// Phew, you've beaten back the zombies. But it's still the apocalypse, and there's still much more to do. Next up, we need to gather enough food and supplies to make it through goodness knows how long. It may be time to repurpose our JARVIS bot to gather some food and supplies for our base camp. 

// Write a function called gatherSupplies that takes in one parameter called suppliesToLookFor, which you can expect will always be given an array as an argument value. That array will contain any number of strings, where each string represents a specific food or type of supply to look for. Your function should use some sort of loop to iterate through this array for each individual element. 

// Your function should do 2 things:
//     1) Your function should log to the console a string that matches the following format: "JARVIS has found some _____!" where the blank space represents the type of supply or food to look for. 
//     2) Your function should return an integer value that represents how many pieces of food or supplies it has managed to find on its foraging trip. 

// For example, if you were given the following argument value: ["canned food", "aspirin", "bandages"]
// Your function would log the following to the console:
//     "JARVIS has found some canned food!"
//     "JARVIS has found some aspirin!"
//     "JARVIS has found some bandages!"
// Your function would finally output the following value:
//     3
// Because there are 3 types of food or supplies in the provided argument value array. 

// const suppliesArr = ["food", "medical supplies", "weapons"]

// function gatherSupplies(suppliesToLookFor){
//     for(let indexNumOfCurrentSupply = 0; indexNumOfCurrentSupply < suppliesToLookFor.length; indexNumOfCurrentSupply++){
//     console.log("JARVIS has found some " + suppliesToLookFor[indexNumOfCurrentSupply])
// }
// return suppliesToLookFor.length
// }

// console.log(gatherSupplies(suppliesArr))


// PROB 4 5/9
// Misfortune has fallen on your camp! Your JARVIS bot is being sabotaged by raiders who also need the food and medicine you have. We need to come up with a plan to help JARVIS avoid these raiders while out foraging.

// Write a function called raiderAvoidancePlan that takes in one parameter called targetsFoundWhileForaging, which you can expect will always be given an array argument value, where each element in the array is a string representing a "target" that JARVIS has found (i.e. medicine, food, etc.). HOWEVER, sometimes JARVIS will detect a human-shaped lifeform, which could either be a zombie or a raider. In those cases, the targetsFoundWhileForaging array can sometimes be given strings (ie. either a string of "zombie" or "raider"). We want to help JARVIS avoid those targets.

// Your function should output the usual string to the terminal if JARVIS finds some good food or supplies while on his journey. That string, to remind you, looks like this: "JARVIS has found some ______!" where the blank represents the type of food or supplies.

// However, if JARVIS encounters a potential danger (either "zombie" or "raider"), we want our function to log  the following to the console: "JARVIS has found a _____!! ENGAGING AVOIDANCE ACTION PLAN!!" 

// Lastly, your function should output a value representing the total number of targets found while out foraging that day. 

// For example, if you were given the following targetsFoundWhileForaging argument value:
// ["insulin", "oatmeal", "raider", "zombie", "canned peaches"]
// Your function would log the following to the console. 
//     "JARVIS has found some insulin!"
//     "JARVIS has found some oatmeal!"
//     "JARVIS has found a raider!! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found a zombie!! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found some canned peaches!"
// Lastly, your function would output the following value:
//     5
// Because 5 total targets were found while out foraging today. 

// const jarvisFound = ["insulin", "oatmeal", "raider", "zombie", "canned peaches"]

// function raiderAvoidancePlan(targetsFoundWhileForaging){
//     for(let currentTargetIndexNum = 0; currentTargetIndexNum < targetsFoundWhileForaging.length; currentTargetIndexNum++){
//         let currentTarget = targetsFoundWhileForaging[currentTargetIndexNum];
//         if(currentTarget === "zombie" || currentTarget === "raider"){
//             console.log("JARVIS has found some " + currentTarget + " Engaging avoidance action plan.")
//         } else {
//             console.log("JARVIS has found some " + currentTarget + ".")
//         }
//     }
//     return targetsFoundWhileForaging.length
// }

// console.log(raiderAvoidancePlan(jarvisFound))