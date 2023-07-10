class Game {
    constructor(gameName, gameId, time) {
        teams = []
        this.gameName = gameName
        this.gameId = gameId
        this.time = time
    }

    addTeam(Team) {
        this.teams.push(Team)
    }

    getGameName() {
        return this.gameName
    }

    setGameName(newName) {
        this.gameName = newName
    }

    getGameId() {
        return this.gameName
    }

    setGameId(id) {
        this.gameId = id
    }

    getTime() {
        return this.time
    }

    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


}