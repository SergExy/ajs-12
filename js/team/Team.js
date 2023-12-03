class Team {
  constructor(...chars) {
    this.addTeamChar(...chars);
  }

  addTeamChar(...chars) {
    chars.forEach((item, i) => {
      this[i] = item;
      this.length = i + 1;
    });
  }

  iterator() {
    let current = 0;
    const last = this.length - 1;
    const chars = this;
    return {
      next() {
        if (current > last) {
          return {
            value: undefined,
            done: true,
          };
        }

        const res = {
          value: chars[current],
          done: false,
        };
        current += 1;
        return res;
      },
    };
  }

  * [Symbol.iterator]() {
    let current = 0;
    while (current < this.length) {
      yield this[current];
      current += 1;
    }
  }
}

export default Team;
