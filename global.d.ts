declare module 'three/examples/jsm/loaders/STLLoader' {
    import { Loader } from 'three';
    import { BufferGeometry } from 'three';
    export class STLLoader extends Loader {
        load(
            url: string,
            onLoad: (geometry: BufferGeometry) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (error: Error) => void
        ): void;
    }
}