export interface Type {
    type: string;
  }

export interface SideBarProps {
    onChangeDynamic: (t: Type) => string;
  }

export interface ArtistItem {
    name: string,
    photo: string,
    title: string
}


export interface PlaylistItem {
  id: {
      playlistId: string;
  },
  snippet: {
      title: string;
      description: string;
      thumbnails: {
          medium: {
              url: string;
          };
      };
  };
}

export interface SearchResponse {
  items: PlaylistItem[];
}

export interface Song {
  id: {
      videoId: string;
  };
  snippet: {
      publishedAt: string;
      title: string;
      thumbnails: {
          medium: {
              url: string;
          };
      };
      description?: string;
  };
  duration?: string; 
}

export interface SongListProps {
  songs: Song[];
}
