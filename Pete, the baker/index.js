function cakes(recipe, available) {
    let howMany = 0;
    while (recipe && available) {
        for (const ingredient in recipe) {
            if (!available.hasOwnProperty(ingredient)) return howMany;

            if (available[ingredient] - recipe[ingredient] >= 0) {
                available[ingredient] -= recipe[ingredient];
            } else return howMany;

        }
        howMany++;
    }
  return howMany;
}