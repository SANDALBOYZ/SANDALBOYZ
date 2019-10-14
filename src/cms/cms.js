import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';

// Register backends
CMS.registerBackend('file-system', FileSystemBackend);

if (window.CMS_MANUAL_INIT) {
    const config = {
        config: {
            backend: process.env.NODE_ENV === 'development'
                ? {
                    name: 'file-system',
                    api_root: 'http://localhost:8000/api',
                }
                : {
                    name: 'git-gateway',
                    branch: 'master',
                },
        },
    };

    CMS.init(config);
}
