Ext.define('ResponsiveTest.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'ResponsiveTest.view.Main',
        'Ext.layout.container.Anchor'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
