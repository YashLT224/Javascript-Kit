document.getElementByClassName = function (className) {
    const elements = [];
    const allElements = document.getElementsByTagName('*')
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        const classNames = element.className.split('');
        if (classNames.indexOf(className) !== -1) {
            elements.push(element);
        }
    }
    return elements;

}



//way2


let result = []
function getElementByClassName(className) {
    function getChildren(nodes) {
        Object.keys(nodes.children).forEach((child) => {
            let childNode = nodes.children[child]
            let Attr = childNode.getAttribute('class');
            if (Attr === className) {
                result.push(childNode)
            }
            getChildren(childNode)
        })
    }
    const nodes = document.body;
    getChildren(nodes);
}