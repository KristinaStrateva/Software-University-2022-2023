class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let currentlyInvitedPlayers = new Set;

        for (const playerInfo of footballPlayers) {
            let [name, age, playerValue] = playerInfo.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const currPlayer = this.invitedPlayers.find(x => x.name === name);

            if (!currPlayer) {
                this.invitedPlayers.push({ name, age, playerValue });

                currentlyInvitedPlayers.add(name);

            } else {
                if (currPlayer.playerValue < playerValue) {

                    currPlayer.playerValue = playerValue;
                }
            }
        }

        let result = `You successfully invite ${Array.from(currentlyInvitedPlayers).join(', ')}.`;

        return result;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const playerInfo = this.invitedPlayers.find(x => x.name === name);

        if (!playerInfo) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < playerInfo.playerValue) {
            const priceDifference = playerInfo.playerValue - playerOffer;

            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        playerInfo.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const playerInfo = this.invitedPlayers.find(x => x.name === name);

        if (!playerInfo) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerInfo.age < age) {
            const ageDifference = age - playerInfo.age;

            return ageDifference < 5 ?
                `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!` :
                `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        let result = 'Players list:';

        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(playerInfo => result += `\nPlayer ${playerInfo.name}-${playerInfo.playerValue}`);

        return result;
    }
}

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
