export type project = {
    id: number;
    title: string;
    description: string;
    techStack: string;
    timeposted: Date;
    category: string;
    linkToLiveProject: string;
    linkToRepository: string;
    image:Buffer;
    summary:string;
    isFeatured: boolean;

}