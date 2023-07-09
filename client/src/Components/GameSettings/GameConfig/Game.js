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




}