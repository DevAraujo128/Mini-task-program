import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import chalk from "chalk";

const filePath = path.join("./task.json");

if (!existsSync(filePath)) {
  writeFileSync(filePath, JSON.stringify([]), "utf-8");
}

const data = readFileSync(filePath, { encoding: "utf-8" });
const parsed = JSON.parse(data);

const tasks = new Map(parsed.map(task => [task.name, task]));

export const taskManager = {
  tasks,

  save() {
    const data = this.toArray();
    writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  },

  create(task) {
    this.tasks.set(task.name, task);
    this.save();
  },

  toArray() {
    return Array.from(this.tasks.values());
  },

    colorStatus(status) {
    switch (status) {
      case "Em andamento":
        return chalk.bgHex("#e3923b").black(` ${status} `);
      case "Concluido":
         return chalk.bgHex("#00ff00").white(` ${status} `);
      case "Cancelada":
        return chalk.bgHex("#ff0000").white(` ${status} `);
      default:
        return chalk.bgWhite.black(` ${status} `);
    }
  }
}