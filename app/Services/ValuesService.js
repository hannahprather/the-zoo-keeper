import { ProxyState } from "../AppState.js";
import { Aardvark } from "../Models/Aardvark.js";
import { Baboon } from "../Models/Baboon.js";
import { Cat } from "../Models/Cat.js";
import { Dingo } from "../Models/Dingo.js";
import { Emu } from "../Models/Emu.js";
import { Flamingo } from "../Models/Flamingo.js";
import { Goat } from "../Models/Goat.js";
import { Hyena } from "../Models/Hyena.js";
import { Iguana } from "../Models/Iguana.js";
import { Jellyfish } from "../Models/Jellyfish.js";
import { Kiwi } from "../Models/Kiwi.js";
import { Llama } from "../Models/Llama.js";
import { Moth } from "../Models/Moth.js";
import { Narwhal } from "../Models/Narwhal.js";
import { Ox } from "../Models/Ox.js";
import { Panther } from "../Models/Panther.js";
import { Quail } from "../Models/Quail.js";
import { Rat } from "../Models/Rat.js";
import { Snail } from "../Models/Snail.js";
import { Turkin } from "../Models/Turkin.js";
import { Urchin } from "../Models/Urchin.js";
import { Value } from "../Models/Value.js";
import { Vulture } from "../Models/Vulture.js";
import { Warthog } from "../Models/Warthog.js";
import { Xerus } from "../Models/Xerus.js";
import { Yak } from "../Models/Yak.js";
import { Zebra } from "../Models/Zebra.js";


let animal1 = new Aardvark('Arnold', 'grey', 'male', 100, false, 'small')
let animal2 = new Baboon('Bernard', 'black', 'male', 950, true, 'medium')
let animal3 = new Cat('Kitty', 'gray', 'male', 27, true, 'small')
let animal4 = new Dingo('Debra', 'brown', 'female', 90, true, 'medium')
let animal5 = new Emu('Emily', 'brown', 'femail', 320, true, 'small')
let animal6 = new Flamingo('Francoise', 'pink', 'male', 220, true, 'none')
let animal7 = new Goat('Garry', 'white', 'male', 34, false, 'small')
let animal8 = new Hyena('Helga', 'black', 'femail', 120, true, 'medium')
let animal9 = new Iguana('Ian', 'green', 'male', 7, true, 'small')
let animal10 = new Jellyfish('Jafar', 'pink', 'male', 1, 'none')
let animal11 = new Kiwi('Karn', 'brown', 'famale', 1, false, 'none')
let animal12 = new Llama('Leonard', 'white', 'male', 340, false, 'small')
let animal13 = new Moth('Martin', 'yellow', 'male', 2, 'none')
let animal14 = new Narwhal('Norman', 'silver', 'male', 1000, 'small')
let animal15 = new Ox('Oliver', 'brown', 'male', 2000, false, 'small')
let animal16 = new Panther('Paula', 'black', 'female', 999, true, 'larege')
let animal17 = new Quail('Quasimodo', 'gray', 'female', 1, false, 'none')
let animal18 = new Rat('Remy', 'brown', 'male', 3, true, 'small')
let animal19 = new Snail('Steve', 'brown', 'male', 1, true, 'small')
let animal20 = new Turkin('Tony', 'brown', 'male', 30, false, 'none')
let animal21 = new Urchin('Ursula', 'purple', 'femail', 1, false, 'none')
let animal22 = new Vulture('Veronica', 'brown', 'male', 28, true, 'small')
let animal23 = new Warthog('Wriggley', 'red', 'male', 76, false, 'large')
let animal24 = new Xerus('Xenon', 'brown', 'femail', 4, false, 'none')
let animal25 = new Yak('Yolanda', 'brown', 'female', 1700, false, 'small')
let animal26 = new Zebra('Zion', 'black and white', 'male', 527, false, 'small')










class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

