function loop_size(node) {
    const arr = [];

    while (node && arr.indexOf(node) < 0) {
        arr.push(node);
        node = node.next;
    }

    const firstIndex = Math.max(0, arr.indexOf(node));
    return arr.length - firstIndex;
}