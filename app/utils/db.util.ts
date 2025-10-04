import type {
  Certificate,
  DeveloperPlatform,
  Experience,
  Project,
  Skill,
  WhatIDo,
} from "~/types";

export class IndexedDBService {
  private db: IDBDatabase | null = null;
  private name: string;
  private version?: number;

  constructor(name: string, version?: number) {
    this.name = name;
    this.version = version;
  }

  private async open(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    this.db = await new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.name, this.version);

      request.onupgradeneeded = (e) => {
        const db = (e.target as IDBOpenDBRequest).result;

        for (const store of [
          "experiences",
          "what_i_dos",
          "skills",
          "projects",
          "certificates",
          "developer_platforms",
        ])
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store, { keyPath: "id" });
          }
        // });
      };

      request.onsuccess = (e) => {
        resolve((e.target as IDBOpenDBRequest).result);
      };

      request.onerror = () => reject(request.error);
    });

    return this.db as IDBDatabase;
  }

  async write(storeName: string, data: any): Promise<void> {
    const db = await this.open();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const request = store.put(data);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async read<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    const db = await this.open();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async readAll<T = any>(storeName: string): Promise<T[]> {
    const db = await this.open();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result as T[]);
      request.onerror = () => reject(request.error);
    });
  }

  async clearStore(storeName: string): Promise<void> {
    const db = await this.open();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);

      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}

export default class PortfolioDB extends IndexedDBService {
  constructor() {
    super("PortfolioDB", 2);
  }

  async storeExperiences(experiences: Experience[]) {
    const storeName = "experiences";
    await this.clearStore(storeName);

    for (const [id, experience] of experiences.entries()) {
      //   const id = `${index}${experience.company
      //     .toLocaleLowerCase()
      //     .replaceAll(/\s+|-+/g, "_")}`;
      const record = {
        id,
        ...experience,
      };

      await this.write(storeName, record);
    }
  }

  async getExperiences() {
    return this.readAll<Experience>("experiences") || [];
  }

  async storeWhatIDos(whatIDo: WhatIDo[]) {
    const storeName = "what_i_dos";
    await this.clearStore(storeName);

    for (const [id, whatIdo] of whatIDo.entries()) {
      const record = {
        id, //: whatIdo.title.toLocaleLowerCase().replaceAll(/\s+|-+/g, "_"),
        ...whatIdo,
      };

      await this.write(storeName, record);
    }
  }

  async getWhatIDos() {
    return this.readAll<WhatIDo>("what_i_dos") || [];
  }

  async storeProjects(projects: Project[]) {
    const storeName = "projects";
    await this.clearStore(storeName);

    for (const [id, projectKey] of Object.keys(projects).entries()) {
      const project = projects[projectKey as any] as Project;

      const record = {
        id, //: project.title.toLocaleLowerCase().replaceAll(/\s+|-+/g, "_"),
        ...project,
      };

      await this.write(storeName, record);
    }
  }

  async getProjects() {
    return this.readAll<Project>("projects") || [];
  }

  async storeCertificates(certificates: Certificate[]) {
    const storeName = "certificates";
    await this.clearStore(storeName);

    for (const [id, certificate] of certificates.entries()) {
      const record = {
        id, //: certificate.name.toLocaleLowerCase().replaceAll(/\s+|-+/g, "_"),
        ...certificate,
      };

      await this.write(storeName, record);
    }
  }

  async getCertificates() {
    return this.readAll<Certificate>("certificates") || [];
  }

  async storeSkills(skills: Skill[]) {
    const storeName = "skills";
    await this.clearStore(storeName);

    for (const [id, skill] of skills.entries()) {
      const record = {
        id, //: skill.name.toLocaleLowerCase().replaceAll(/\s+|-+/g, "_"),
        ...skill,
      };

      await this.write(storeName, record);
    }
  }

  async getSkills() {
    return this.readAll<Skill>("skills") || [];
  }

  async storeDevPlatforms(platforms: DeveloperPlatform[]) {
    const storeName = "developer_platforms";
    await this.clearStore(storeName);

    for (const [id, platform] of platforms.entries()) {
      const record = {
        id, //: platform.name.toLocaleLowerCase().replaceAll(/\s+|-+/g, "_"),
        ...platform,
      };

      await this.write(storeName, record);
    }
  }

  async getDevPlatforms() {
    return this.readAll<DeveloperPlatform>("developer_platforms") || [];
  }
}
