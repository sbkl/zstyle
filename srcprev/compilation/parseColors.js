export default customColors => {
    let colors = {}
    Object.keys(customColors).forEach((color) => {
        if (typeof customColors[color] != 'string') {
            Object.keys(customColors[color]).forEach(shade => {
                colors[`${color}-${shade}`] = customColors[color][shade]
            })
        } else {
            colors[color] = customColors[color]
        }
    })
    return colors
}

