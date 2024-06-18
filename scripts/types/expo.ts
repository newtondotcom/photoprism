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

export type AlbumType = "album" | "moment" | "smartAlbum";

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

export type GranularPermission = "audio" | "photo" | "video";

export interface MediaLibraryAssetInfoQueryOptions {
  shouldDownloadFromNetwork?: boolean;
}

export interface MediaLibraryAssetsChangeEvent {
  deletedAssets?: Asset[];
  hasIncrementalChanges: boolean;
  insertedAssets?: Asset[];
  updatedAssets?: Asset[];
}

export type MediaSubtype =
  | "depthEffect"
  | "hdr"
  | "highFrameRate"
  | "livePhoto"
  | "panorama"
  | "screenshot"
  | "stream"
  | "timelapse";

export interface MediaTypeObject {
  audio: "audio";
  photo: "photo";
  unknown: "unknown";
  video: "video";
}

export type MediaTypeValue = "audio" | "photo" | "video" | "unknown";

export interface PagedInfo<T> {
  assets: T[];
  endCursor: string;
  hasNextPage: boolean;
  totalCount: number;
}

export type PermissionExpiration = "never" | number;

// export type PermissionHookOptions = PermissionHookBehavior | Options;

export interface EXPermissionResponse {
  canAskAgain: boolean;
  expires: PermissionExpiration;
  granted: boolean;
  status: PermissionStatus;
}

export interface PermissionResponse extends EXPermissionResponse {
  accessPrivileges?: "all" | "limited" | "none";
}

export type SortByKey =
  | "default"
  | "mediaType"
  | "width"
  | "height"
  | "creationTime"
  | "modificationTime"
  | "duration";

export interface SortByObject {
  creationTime: "creationTime";
  default: "default";
  duration: "duration";
  height: "height";
  mediaType: "mediaType";
  modificationTime: "modificationTime";
  width: "width";
}

export type SortByValue = [SortByKey, boolean] | SortByKey;

export interface Subscription {
  remove: () => void;
}

export enum PermissionStatus {
  DENIED = "denied",
  GRANTED = "granted",
  UNDETERMINED = "undetermined",
}
