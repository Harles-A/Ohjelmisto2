
let numberOfCandidates = Number(prompt("Enter the number of candidates:"));
let candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
    let candidateName = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({ name: candidateName, votes: 0 });
}

let voterCount = Number(prompt("Enter the number of voters:"));
for (let i = 0; i < voterCount; i++) {
    let vote = prompt(`Voter number ${i + 1} votes for:`);
    let candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
    if (candidate) {
        candidate.votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");
for (let candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}
