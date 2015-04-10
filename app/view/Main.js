Ext.define('ResponsiveTest.view.Main', {
    extend   : 'Ext.container.Container',
    requires : [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype : 'app-main',

    layout : {
        type : 'border'
    },

    items : [{
        region : 'west',
        xtype  : 'panel',
        title  : 'west',
        width  : 150
    },{
        region : 'center',
        xtype  : 'tabpanel',
        items  : [{
            title  : 'Center Tab 1',
            itemId : 'responsivePanel',
            layout : 'column',
            items  : [
                {
                    xtype       : 'panel',
                    columnWidth : .5,
                    title       : 'title1',
                    html        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum beatae repellendus voluptatem neque repellat molestiae, autem consectetur dolorem placeat deserunt, quo est facilis officia. Officia laudantium atque suscipit inventore recusandae.'
                },
                {
                    xtype       : 'panel',
                    columnWidth : .5,
                    title       : 'title2',
                    html        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum beatae repellendus voluptatem neque repellat molestiae, autem consectetur dolorem placeat deserunt, quo est facilis officia. Officia laudantium atque suscipit inventore recusandae.'
                }
            ]
        }]
    }]
});