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
  
  export interface PhotoPrismFile {
    AspectRatio: number;
    Chroma: number;
    Codec: string;
    Colors: string;
    CreatedAt: string;
    Diff: number;
    FileType: string;
    Hash: string;
    Height: number;
    Luminance: string;
    Markers: any[];
    MediaType: string;
    Mime: string;
    Name: string;
    Orientation: number;
    OriginalName: string;
    PhotoUID: string;
    Portrait: boolean;
    Primary: boolean;
    Root: string;
    Size: number;
    UID: string;
    UpdatedAt: string;
    Width: number;
  }
  
  export interface PhotoPrismMergedPhoto {
    Altitude: number;
    CameraID: number;
    CameraMake: string;
    CameraModel: string;
    CameraSrc: string;
    CellID: string;
    CheckedAt: string;
    Color: number;
    Country: string;
    CreatedAt: string;
    Day: number;
    Description: string;
    EditedAt: string;
    Exposure: string;
    FNumber: number;
    Favorite: boolean;
    FileName: string;
    FileRoot: string;
    FileUID: string;
    Files: PhotoPrismFile[];
    FocalLength: number;
    Hash: string;
    Height: number;
    ID: string;
    InstanceID: string;
    Iso: number;
    Lat: number;
    LensID: number;
    LensModel: string;
    Lng: number;
    Merged: boolean;
    Month: number;
    Name: string;
    OriginalName: string;
    Panorama: boolean;
    Path: string;
    PlaceCity: string;
    PlaceCountry: string;
    PlaceID: string;
    PlaceLabel: string;
    PlaceSrc: string;
    PlaceState: string;
    Portrait: boolean;
    Private: boolean;
    Quality: number;
    Resolution: number;
    Scan: boolean;
    Stack: number;
    TakenAt: string;
    TakenAtLocal: string;
    TakenSrc: string;
    TimeZone: string;
    Title: string;
    Type: string;
    TypeSrc: string;
    UID: string;
    UpdatedAt: string;
    Width: number;
    Year: number;
  }
  
  
  export interface SearchPhotos {
    q?: string;              // Query parameter
    s?: string;              // Scope parameter. Example: s:ariqwb43p5dh9h13. Notes: Limits the results to one album or another scope, if specified
    filter?: string;         // Filter parameter
    id?: string;             // ID parameter. Example: id:123e4567-e89b-.... Notes: Finds pictures by Exif UID, XMP Document ID, or Instance ID
    uid?: string;            // UID parameter. Example: uid:pqbcf5j446s0futy. Notes: Limits results to the specified internal unique IDs
    type?: string;           // Type parameter. Example: type:raw. Notes: Media Type (image, video, raw, live, animated); separate with |
    path?: string;           // Path parameter. Example: path:2020/Holiday. Notes: Path Name (separate with |), supports * wildcards
    folder?: string;         // Folder parameter (Alias for Path). Example: folder:"*/2020". Notes: Path Name (separate with |), supports * wildcards
    name?: string;           // Name parameter. Example: name:"IMG_9831-112*". Notes: File Name without path and extension (separate with |)
    filename?: string;       // Filename parameter. Example: filename:"2021/07/12345.jpg". Notes: File Name with path and extension (separate with |)
    original?: string;       // Original parameter. Example: original:"IMG_9831-112*". Notes: Original file name of imported files (separate with |)
    title?: string;          // Title parameter. Example: title:"Lake*". Notes: Title (separate with |)
    hash?: string;           // Hash parameter. Example: hash:2fd4e1c67a2d. Notes: SHA1 File Hash (separate with |)
    primary?: boolean;       // Primary parameter
    stack?: boolean;         // Stack parameter
    unstacked?: boolean;     // Unstacked parameter
    stackable?: boolean;     // Stackable parameter
    video?: boolean;         // Video parameter
    vector?: boolean;        // Vector parameter
    animated?: boolean;      // Animated parameter
    photo?: boolean;         // Photo parameter
    raw?: boolean;           // Raw parameter
    live?: boolean;          // Live parameter
    scan?: string;           // Scan parameter. Example: scan:true scan:false. Notes: Finds scanned photos and documents
    mp?: string;             // Mp parameter. Example: mp:3-6. Notes: Resolution in Megapixels (MP)
    panorama?: boolean;      // Panorama parameter
    portrait?: boolean;      // Portrait parameter
    landscape?: boolean;     // Landscape parameter
    square?: boolean;        // Square parameter
    error?: boolean;         // Error parameter
    hidden?: boolean;        // Hidden parameter
    archived?: boolean;      // Archived parameter
    public?: boolean;        // Public parameter
    private?: boolean;       // Private parameter
    favorite?: string;       // Favorite parameter. Example: favorite:true favorite:false. Notes: Finds images by favorite status
    unsorted?: boolean;      // Unsorted parameter
    near?: string;           // Near parameter. Example: near:pqbcf5j446s0futy. Notes: Finds nearby pictures (UID)
    s2?: string;             // S2 parameter. Example: s2:4799e370ca54c8b9. Notes: S2 Position (Cell ID)
    olc?: string;            // Olc parameter. Example: olc:8FWCHX7W+. Notes: OLC Position (Open Location Code)
    lat?: number;            // Lat parameter. Example: lat:41.894043. Notes: GPS Position (Latitude)
    lng?: number;            // Lng parameter. Example: lng:-87.62448. Notes: GPS Position (Longitude)
    alt?: string;            // Alt parameter. Example: alt:300-500. Notes: GPS Altitude (m)
    dist?: number;           // Dist parameter. Example: dist:50. Notes: Distance to Position (km)
    latlng?: string;         // Latlng parameter. Notes: GPS Bounding Box (Lat N, Lng E, Lat S, Lng W)
    camera?: string;         // Camera parameter. Example: camera:canon. Notes: Camera Make/Model Name
    lens?: string;           // Lens parameter. Example: lens:ef24. Notes: Lens Make/Model Name
    iso?: string;            // Iso parameter. Example: iso:200-400. Notes: ISO Number (light sensitivity)
    mm?: string;             // Mm parameter. Example: mm:28-35. Notes: Focal Length (35mm equivalent)
    f?: string;              // F parameter. Example: f:2.8-4.5. Notes: Aperture (f-number)
    color?: string;          // Color parameter. Example: color:"red|blue". Notes: Color Name (purple, magenta, pink, red, orange, gold, yellow, lime, green, teal, cyan, blue, brown, white, grey, black) (separate with |)
    chroma?: number;         // Chroma parameter. Example: chroma:70. Notes: Chroma (0-100)
    mono?: boolean;          // Mono parameter. Notes: Finds pictures with few or no colors
    diff?: number;           // Diff parameter. Notes: Differential Perceptual Hash (000000-FFFFFF)
    geo?: string;            // Geo parameter. Example: geo:yes. Notes: Finds pictures with or without coordinates
    keywords?: string;       // Keywords parameter. Example: keywords:"sand&water". Notes: Keywords (combinable with & and |)
    label?: string;          // Label parameter. Example: label:cat|dog. Notes: Label Names (separate with |)
    category?: string;       // Category parameter. Example: category:airport. Notes: Location Category
    country?: string;        // Country parameter. Example: country:"de|us". Notes: Location Country Code (separate with |)
    state?: string;          // State parameter. Example: state:"Baden-Württemberg". Notes: Location State (separate with |)
    city?: string;           // City parameter. Example: city:"Berlin". Notes: Location City (separate with |)
    year?: string;           // Year parameter. Example: year:1990|2003. Notes: Year (separate with |)
    month?: string;          // Month parameter. Example: month:7|10. Notes: Month (1-12, separate with |)
    day?: string;            // Day parameter. Example: day:3|13. Notes: Day of Month (1-31, separate with |)
    face?: string;           // Face parameter. Example: face:PN6QO5INYTUSAATOFL43LL2ABAV5ACZG. Notes: Face ID, yes, no, new, or kind
    faces?: string;          // Faces parameter. Example: faces:yes faces:3. Notes: Minimum number of Faces (yes = 1)
    subject?: string;        // Subject parameter. Example: subject:"Jane Doe & John Doe". Notes: Alias for person
    person?: string;         // Person parameter (Alias for Subject). Example: person:"Jane Doe & John Doe". Notes: Subject Names, exact matches (combinable with & and |)
    subjects?: string;       // Subjects parameter (People names). Example: subjects:"Jane & John". Notes: Alias for people
    people?: string;         // People parameter (Alias for Subjects). Example: people:"Jane & John". Notes: Subject Names (combinable with & and |)
    album?: string;          // Album parameter (Album UID or Name). Example: album:berlin. Notes: Album UIDs or name
    albums?: string;         // Albums parameter (Multi search with and/or). Example: albums:"South Africa & Birds". Notes: Album Names (combinable with & and |)
    quality?: number;        // Quality parameter. Notes: Minimum quality score (1-7)
    review?: boolean;        // Review parameter. Notes: Finds pictures in review
    added?: string;          // Added parameter. Example: added:"2006-01-02T15:04:05Z". Notes: Finds pictures added at or after this time
    updated?: string;        // Updated parameter. Example: updated:"2006-01-02T15:04:05Z". Notes: Finds pictures updated at or after this time
    edited?: string;         // Edited parameter. Example: edited:"2006-01-02T15:04:05Z". Notes: Finds pictures edited at or after this time
    taken?: string;          // Taken parameter. Notes: Finds pictures taken on the specified date
    before?: string;         // Before parameter. Notes: Finds pictures taken on or before this date
    after?: string;          // After parameter. Notes: Finds pictures taken on or after this date
    count: number;           // Count parameter (Result FILE limit)
    offset?: number;         // Offset parameter (Result FILE offset)
    order?: string;          // Order parameter (Sort order)
    merged?: boolean;        // Merged parameter (Merge FILES in response)
}
