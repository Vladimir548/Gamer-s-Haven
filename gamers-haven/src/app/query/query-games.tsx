import axios from 'axios';
import { GamesResponse } from '@/interface/games/interface-games';

export const QueryGames = {
  async getGames() {
    const { data } = await axios.post(
      '/igdb/games',
      `fields *, screenshots.*, slug, cover.*,genres.*,artworks.*,platforms.*; limit 20; where total_rating > 90 & screenshots != null & cover != null & artworks != null;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );

    return data as GamesResponse;
  },
};
