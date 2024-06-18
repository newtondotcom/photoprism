export type GenerateTokenResponse = {
  access_token: string;
  config: {
    mode: string;
    name: string;
    about: string;
    edition: string;
    version: string;
    copyright: string;
    flags: string;
    baseUri: string;
    staticUri: string;
    cssUri: string;
    jsUri: string;
    manifestUri: string;
    apiUri: string;
    contentUri: string;
    videoUri: string;
    wallpaperUri: string;
    siteUrl: string;
    siteDomain: string;
    siteAuthor: string;
    siteTitle: string;
    siteCaption: string;
    siteDescription: string;
    sitePreview: string;
    legalInfo: string;
    legalUrl: string;
    appName: string;
    appMode: string;
    appIcon: string;
    appColor: string;
    restart: boolean;
    debug: boolean;
    trace: boolean;
    test: boolean;
    demo: boolean;
    sponsor: boolean;
    readonly: boolean;
    uploadNSFW: boolean;
    public: boolean;
    authMode: string;
    usersPath: string;
    loginUri: string;
    registerUri: string;
    passwordLength: number;
    passwordResetUri: string;
    experimental: boolean;
    albumCategories: any;
    albums: Array<any>;
    cameras: Array<any>;
    lenses: Array<{
      ID: number;
      Slug: string;
      Name: string;
      Make: string;
      Model: string;
      Type: string;
    }>;
    countries: Array<{
      ID: string;
      Slug: string;
      Name: string;
    }>;
    people: Array<any>;
    thumbs: Array<{
      size: string;
      usage: string;
      w: number;
      h: number;
    }>;
    tier: number;
    membership: string;
    customer: string;
    mapKey: string;
    downloadToken: string;
    previewToken: string;
    disable: {
      restart: boolean;
      webdav: boolean;
      settings: boolean;
      places: boolean;
      backups: boolean;
      tensorflow: boolean;
      faces: boolean;
      classification: boolean;
      ffmpeg: boolean;
      exiftool: boolean;
      vips: boolean;
      sips: boolean;
      darktable: boolean;
      rawtherapee: boolean;
      imagemagick: boolean;
      heifconvert: boolean;
      vectors: boolean;
      jpegxl: boolean;
      raw: boolean;
    };
    count: {
      all: number;
      photos: number;
      live: number;
      videos: number;
      cameras: number;
      lenses: number;
      countries: number;
      hidden: number;
      archived: number;
      favorites: number;
      review: number;
      stories: number;
      private: number;
      albums: number;
      private_albums: number;
      moments: number;
      private_moments: number;
      months: number;
      private_months: number;
      states: number;
      private_states: number;
      folders: number;
      private_folders: number;
      files: number;
      people: number;
      places: number;
      labels: number;
      labelMaxPhotos: number;
    };
    pos: {
      uid: string;
      cid: string;
      utc: string;
      lat: number;
      lng: number;
    };
    years: any;
    colors: Array<{
      Example: string;
      Name: string;
      Slug: string;
    }>;
    categories: Array<any>;
    clip: number;
    server: {
      cores: number;
      routines: number;
      memory: {
        total: number;
        free: number;
        used: number;
        reserved: number;
        info: string;
      };
    };
    settings: {
      ui: {
        scrollbar: boolean;
        zoom: boolean;
        theme: string;
        language: string;
        timeZone: string;
      };
      search: {
        batchSize: number;
      };
      maps: {
        animate: number;
        style: string;
      };
      features: {
        account: boolean;
        albums: boolean;
        archive: boolean;
        delete: boolean;
        download: boolean;
        edit: boolean;
        estimates: boolean;
        favorites: boolean;
        files: boolean;
        folders: boolean;
        import: boolean;
        labels: boolean;
        library: boolean;
        logs: boolean;
        moments: boolean;
        people: boolean;
        places: boolean;
        private: boolean;
        ratings: boolean;
        reactions: boolean;
        review: boolean;
        search: boolean;
        services: boolean;
        settings: boolean;
        share: boolean;
        upload: boolean;
        videos: boolean;
      };
      import: {
        path: string;
        move: boolean;
      };
      index: {
        path: string;
        convert: boolean;
        rescan: boolean;
        skipArchived: boolean;
      };
      stack: {
        uuid: boolean;
        meta: boolean;
        name: boolean;
      };
      share: {
        title: string;
      };
      download: {
        name: string;
        disabled: boolean;
        originals: boolean;
        mediaRaw: boolean;
        mediaSidecar: boolean;
      };
      templates: {
        default: string;
      };
    };
    acl: {
      albums: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      calendar: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      config: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      default: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      favorites: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      feedback: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      files: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      folders: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      labels: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      logs: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      metrics: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      moments: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      passcode: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      password: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      people: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      photos: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      places: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      services: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      sessions: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      settings: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      shares: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      users: {
        access_all: boolean;
        access_own: boolean;
        create: boolean;
        delete: boolean;
        manage: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      videos: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
      webdav: {
        access_all: boolean;
        access_library: boolean;
        access_own: boolean;
        access_shared: boolean;
        create: boolean;
        delete: boolean;
        download: boolean;
        full_access: boolean;
        manage: boolean;
        rate: boolean;
        react: boolean;
        share: boolean;
        subscribe: boolean;
        update: boolean;
        view: boolean;
      };
    };
    ext: {
      plus: {};
    };
  };
  data: {
    tokens: any;
    shares: any;
  };
  expires_in: number;
  id: string;
  provider: string;
  scope: string;
  session_id: string;
  status: string;
  token_type: string;
  user: {
    ID: number;
    UID: string;
    AuthProvider: string;
    AuthMethod: string;
    AuthID: string;
    Name: string;
    DisplayName: string;
    Email: string;
    Role: string;
    Attr: string;
    SuperAdmin: boolean;
    CanLogin: boolean;
    LoginAt: string;
    WebDAV: boolean;
    BasePath: string;
    UploadPath: string;
    CanInvite: boolean;
    Details: {
      BirthYear: number;
      BirthMonth: number;
      BirthDay: number;
      NameTitle: string;
      GivenName: string;
      MiddleName: string;
      FamilyName: string;
      NameSuffix: string;
      NickName: string;
      NameSrc: string;
      Gender: string;
      About: string;
      Bio: string;
      Location: string;
      Country: string;
      Phone: string;
      SiteURL: string;
      ProfileURL: string;
      OrgTitle: string;
      OrgName: string;
      OrgEmail: string;
      OrgPhone: string;
      OrgURL: string;
      CreatedAt: string;
      UpdatedAt: string;
    };
    Settings: {
      CreatedAt: string;
      UpdatedAt: string;
    };
    Thumb: string;
    ThumbSrc: string;
    CreatedAt: string;
    UpdatedAt: string;
  };
};

export interface Album {
  UID?: string;
  ParentUID?: string;
  Thumb?: string;
  Slug?: string;
  Type?: string;
  Title?: string;
  Location?: string;
  Category?: string;
  Caption?: string;
  Description?: string;
  Notes?: string;
  Filter?: string;
  Order?: string;
  Template?: string;
  Path?: string;
  State?: string;
  Country?: string;
  Year?: number;
  Month?: number;
  Day?: number;
  Favorite?: boolean;
  Private?: boolean;
  PhotoCount?: number;
  LinkCount?: number;
  CreatedAt?: string;
  UpdatedAt?: string;
  DeletedAt?: string;
}

export enum PhotoPrismOrder {
  NEWEST = "newest",
  OLDEST = "oldest",
  FAVORITES = "favorites",
  NAME = "name",
  PLACE = "place",
}

export interface PhotoPrismMergedPhoto {
  uid: string;
  hash: string;
  width: number;
  height: number;
  takenAtLocal: string;
  type: string;
  title: string;
  files: File[];
  cameraMake?: string | null;
  favorite: boolean;
  quality: number;
}

export interface GetPhotosParams {
  count: number;
  offset: number;
  order?: PhotoPrismOrder;
  public?: boolean;
  q?: string;
}

export interface PhotoPrismBatchPhotoUids {
  photos: string[];
}

// Expo assets types

export interface Location {
  latitude: number;
  longitude: number;
}

export interface AlbumExpo {
  approximateLocation?: Location;
  assetCount: number;
  endTime?: number;
  id: string;
  locationNames?: string[];
  startTime?: number;
  title: string;
  type?: AlbumType;
}

export type AlbumRef = AlbumExpo | string;

export type AlbumType = 'album' | 'moment' | 'smartAlbum';

export interface AlbumsOptions {
  includeSmartAlbums?: boolean;
}

export interface Asset {
  albumId?: string;
  creationTime: number;
  duration: number;
  filename: string;
  height: number;
  id: string;
  mediaSubtypes?: MediaSubtype[];
  mediaType: MediaTypeValue;
  modificationTime: number;
  uri: string;
  width: number;
}

export interface AssetInfo extends Asset {
  exif?: object;
  isFavorite?: boolean;
  isNetworkAsset?: boolean;
  localUri?: string;
  location?: Location;
  orientation?: number;
}

export type AssetRef = Asset | string;

export interface AssetsOptions {
  after?: AssetRef;
  album?: AlbumRef;
  createdAfter?: Date | number;
  createdBefore?: Date | number;
  first?: number;
  mediaType?: MediaTypeValue[] | MediaTypeValue;
  sortBy?: SortByValue[] | SortByValue;
}

export type GranularPermission = 'audio' | 'photo' | 'video';

export interface MediaLibraryAssetInfoQueryOptions {
  shouldDownloadFromNetwork?: boolean;
}

export interface MediaLibraryAssetsChangeEvent {
  deletedAssets?: Asset[];
  hasIncrementalChanges: boolean;
  insertedAssets?: Asset[];
  updatedAssets?: Asset[];
}

export type MediaSubtype = 'depthEffect' | 'hdr' | 'highFrameRate' | 'livePhoto' | 'panorama' | 'screenshot' | 'stream' | 'timelapse';

export interface MediaTypeObject {
  audio: 'audio';
  photo: 'photo';
  unknown: 'unknown';
  video: 'video';
}

export type MediaTypeValue = 'audio' | 'photo' | 'video' | 'unknown';

export interface PagedInfo<T> {
  assets: T[];
  endCursor: string;
  hasNextPage: boolean;
  totalCount: number;
}

export type PermissionExpiration = 'never' | number;

// export type PermissionHookOptions = PermissionHookBehavior | Options;

export interface EXPermissionResponse {
  canAskAgain: boolean;
  expires: PermissionExpiration;
  granted: boolean;
  status: PermissionStatus;
}

export interface PermissionResponse extends EXPermissionResponse {
  accessPrivileges?: 'all' | 'limited' | 'none';
}

export type SortByKey = 'default' | 'mediaType' | 'width' | 'height' | 'creationTime' | 'modificationTime' | 'duration';

export interface SortByObject {
  creationTime: 'creationTime';
  default: 'default';
  duration: 'duration';
  height: 'height';
  mediaType: 'mediaType';
  modificationTime: 'modificationTime';
  width: 'width';
}

export type SortByValue = [SortByKey, boolean] | SortByKey;

export interface Subscription {
  remove: () => void;
}

export enum PermissionStatus {
  DENIED = "denied",
  GRANTED = "granted",
  UNDETERMINED = "undetermined"
}
