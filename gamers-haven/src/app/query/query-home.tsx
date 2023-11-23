import axios from 'axios';
import { GamesResponse } from '@/interface/games/interface-games';
import { ResponseEvents } from '@/interface/interface-events';
import { GenresResponse } from '@/interface/interface-genres';
const currentDate = Math.floor(Date.now() / 1000); // Текущая дата в формате UNIX timestamp
const lastMonthDate = currentDate - 3 * 30 * 24 * 60 * 60;

export const QueryHome = {
  async getSwiper() {
    const { data } = await axios.post(
      '/igdb/games',
      `fields name,  slug ,genres.name,artworks.*,platforms.abbreviation;sort rating_count desc ; limit 20; where rating > 20 & rating_count > 10 & first_release_date > ${lastMonthDate} & screenshots != null & cover != null & artworks != null;`,
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
  async getPopular() {
    const { data } = await axios.post(
      '/igdb/games',
      `fields *,cover.*,  slug;sort rating_count desc ; limit 20; where rating > 40 & rating_count > 10  & screenshots != null & cover != null & artworks != null;`,
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
  async getComing() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields *,cover.*,artworks.*,  slug,first_release_date ;sort first_release_date asc ; limit 20; where hypes > 20 & first_release_date > ${currentDate} & screenshots != null & cover != null & artworks != null;`,
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
  async getEvents() {
    const { data } = await axios.post<ResponseEvents>(
      '/igdb/events',
      `fields *,  event_logo.* ;sort start_time desc; limit 20; where event_logo !=null;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );

    return data as ResponseEvents;
  },
  async getGenres() {
    const { data } = await axios.post<GenresResponse>('/igdb/genres', `fields * ;limit 25 ;`, {
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
        'Content-Type': 'text/plain',
      },
    });

    return data as GenresResponse;
  },
  async getSearch(value: string) {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `search "${value}"; fields name ;limit 15;`,
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
