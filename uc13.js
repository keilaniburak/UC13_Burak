var cube = {
    length: 6,
    mass: 20,
    volume: function () {
        return Math.pow(this.length, 3);
    },
    density: function () {
        return (this.mass / this.volume());
    },
    surfaceArea: function () {
        return (6 * Math.pow(this.length, 2));
    }
};
var pet = {
    name: "Alpine",
    species: "Dog",
    sleepy: 0,
    hunger: 0,
    awake: true,
    speak: function () {
        if (this.species === "Dog") {
            result = this.sleepy++;
            result = this.hunger++;
            return "Woof! That means I love you!";
        }
        else if (this.species === "Cat") {
            result = this.sleepy++;
            result = this.hunger++;
            return "Ugh. meow.";
        }
        else {
            return "";
        }
    },
    eat: function () {
        this.hunger = 0;
        result = this.sleepy++;
        if (this.species === "Dog") {
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }
        else if (this.species === "Cat") {
            return "Ugh, I guess I'll eat this.";
        }
        else
            return "";
    },
    nap: function ()   {
        this.sleepy = 0;
        this.awake = false;
        return  "Zzzz...";
    },
   wakeUp: function () {
       this.awake = true;
       this.sleepy = 0;
       this.hunger= 4;
       if (this.species === "Cat") {
           return "Ugh, I'm awake now. Is there anything to eat around here?";
       }
       else if (this.species === "Dog") {
           return "I'm awake! Let's eat and then play! I love you!";
       }
       else
           return "";
   },
    rollOver: function () {
        result = this.sleepy++;
        result = this.hunger++;
        if (this.species === "Cat") {
           return "Ugh. I'm a cat. I only roll over if I want to.";
        }
        else if (this.species === "Dog" && this.awake === true && this.hunger < 4 && this.sleepy < 5) {
            return "Rolling! Now what? I love you!";
        }
    },
     fetch: function () {
         if (this.species === "Cat") {
             return "Ugh. I'm a cat. I don't fetch.";
         }
         result = this.sleepy++;
         result = this.hunger++;
         if (this.species === "Dog" && this.awake === true && this.hunger < 4 && this.sleepy < 5) {
             return "Must get the stick! I love you!";
         }
        }
}

The Pet object has a rollOver method that returns "Ugh. I'm a cat. I only roll over if I want to." for a cat, or "Rolling! Now what? I love you!" if the pet is awake with a hunger state less than 4 and sleepy state less than 5.  Otherwise, for a dog, "I'm hungry! Let's eat first. I love you!", "Yawn. Let's play after a nap. I love you!", or "Zzzz..." is returned depending on the dog's state.  For a cat, "Ugh. Feed me before I'll even think about it.", "Ugh. I need a 12 hour nap first.", or "Zzzz..." is returned depending on the cat's state.  When the pet rolls over the hunger and sleepy states both increase by 1.
The Pet object has a fetch method that returns "Ugh. I'm a cat. I don't fetch." for a cat, or "Must get the stick! I love you!" for a dog if the pet is awake with a hunger state less than 4 and sleepy state less than 5. Otherwise, for a dog, "I'm hungry! Let's eat first. I love you!", "Yawn. Let's play after a nap. I love you!", or "Zzzz..." is returned depending on the dog's state.  For a cat, "Ugh. Feed me before I'll even think about it.", "Ugh. I need a 12 hour nap first.", or "Zzzz..." is returned depending on the cat's state.  When the pet fetches the hunger and sleepy states both increase by 1.
The Pet object has a shake method that returns "Ugh. I'm a cat. I never shake" for a cat, or "Nice to meet you! I love you!" for a dog if the pet is awake with a hunger state less than 4 and sleepy state less than 5. Otherwise, for a dog, "I'm hungry! Let's eat first. I love you!", "Yawn. Let's play after a nap. I love you!", or "Zzzz..." is returned depending on the dog's state.  For a cat, "Ugh. Feed me before I'll even think about it.", "Ugh. I need a 12 hour nap first.", or "Zzzz..." is returned depending on the cat's state.  When the pet shakes the hunger and sleepy states both increase by 1.
