const Vector = function (components) {

    this.components = components;

    this.add = function (otherVector) {
        if (components.length === otherVector.components.length) {
            return new Vector(components.map((element, index) => element + otherVector.components[index]));
        } throw new Error("different lengths of vectors");
    };

    this.subtract = function (otherVector) {
        if (components.length === otherVector.components.length) {
            return new Vector(components.map((element, index) => element - otherVector.components[index]));
        } throw new Error("different lengths of vectors");
    };

    this.dot = function (otherVector) {
        if (components.length === otherVector.components.length) {
            return components.map((element, index) => element * otherVector.components[index]).reduce((prev, curr) => prev + curr);
        } throw new Error("different lengths of vectors");
    };

    this.norm = function () {
        return Math.sqrt(components.reduce((prev, curr) => prev + Math.pow(curr, 2)));
    };

    this.equals = function (otherVector) {
        if (components.length === otherVector.components.length) {
            for (let i = 0; i < components.length; i++) {
                if (components[i] !== otherVector.components[i]) return false;
            }
            return true;
        }
        return false;
    }

    this.toString = function () {
        return `(${components.join(',')})`;
    }
    
};