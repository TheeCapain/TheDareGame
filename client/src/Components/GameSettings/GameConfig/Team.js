class Teams {
    constructor(players, name, score) {
        players = []
        this.name = name
        this.score = score
    }

    addPlayer(players, Player) {
        players.push(Player)
        return players
    }

    getName() {
        return this.name
    }

    setName(newName) {
        this.name = newName
    }

    getScore() {
        return this.score
    }

    setScore(points) {
        this.score = points
    }

}