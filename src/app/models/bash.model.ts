// bash.model.ts
export interface Bash {
  id: string; // GUID - matches your Guid in .NET
  title: string;
  ownerId: string;
  owner?: Basher;
  // Add other properties from your Bash model
}
export interface Basher{
  id: string;
  username: string;
}


export interface CreateBashDto {
  title: string;
  ownerId: string;
  // Add properties that match your CreateBashDto from .NET
}

export interface UpdateBashDto {
  title: string;
  ownerId: string;
  // Add properties that match your UpdateBashDto from .NET
}
