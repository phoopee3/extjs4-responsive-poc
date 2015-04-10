Ext.define('ResponsiveTest.controller.Main', {
    extend : 'Ext.app.Controller',

    init : function () {
        this.control({
            '#responsivePanel' : {
                resize : this.onResponsiveResize
            }
        });
    },

    onResponsiveResize : function (t, width, height, oldWidth, oldHeight, eOpts ) {
        if (width <= 750 && oldWidth > 750) {
            this.setColumnWidth('#responsivePanel', 1);
        }
        if (width > 750 && oldWidth <= 750) {
            this.setColumnWidth('#responsivePanel', .5);
        }
    },

    setColumnWidth : function (cmp, pct) {
        cmp = Ext.ComponentQuery.query(cmp)[0];
        for(var i = 0; i < cmp.items.items.length; i++) {
            cmp.items.items[i].columnWidth = pct;
        }
        cmp.doLayout();
    }
});
