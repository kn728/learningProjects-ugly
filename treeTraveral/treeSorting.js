function start(i) {
    console.log(i)
    if(i > 10) {
        return
    }
    start(i+1)
}

start(0)