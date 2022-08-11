import Tiger from "./Tiger.js";
import Wolf from "./Wolf.js";

const fighting = (tiger, wolf) => {
   if (tiger.strenght > wolf.strenght) {
      tiger.growl();
      return;
   }

   if (wolf.strenght > tiger.strenght) {
      wolf.howl();
      return;
   }

   console.log("Tiger and Wolf have same strength");
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
