'use strict';

module.exports = {
    'images': {
        'src': 'documents/images/**',
        'destSrc': 'documents/images',
        'dest': 'public/images'
    },

    'deck': {
        'src': 'documents/deck.js/**',
        'dest': 'public/deck.js'
    },

    'ct': {
        'src': 'documents/ct/**',
        'dest': 'public/ct'
    },

    'deck_addons' : {
        'src' : 'deck-addons/**',
        'dest' : 'public/deck.js/extensions/'
    },

    'asciidoc': {
        'src' : 'documents/**.adoc'
    },

    'dist': {
        'deploy': 'public/**',
        'root': 'public'
    }

};
