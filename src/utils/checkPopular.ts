const checkPopular = (views: number): boolean => {

    if (views > 1000) {
        return true
    } else if (views < 100) {
        return false
    }

    return false
}

export default checkPopular