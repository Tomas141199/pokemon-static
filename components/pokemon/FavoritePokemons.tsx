import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <FavoritePokemonCard id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
