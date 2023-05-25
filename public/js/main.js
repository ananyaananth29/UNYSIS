const navbar = $('#navbar');
const mainContent = $('#main-content');
const panelTopBar = $('#main-content > .navbar-light');

const editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  pageManager: true, // This should be set to true
  width: 'auto',
  //storageManager: false,

  storageManager: {
    // type: 'indexeddb', // Storage type. Available: local | remote
    type: 'local',
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
    // ...
    // Default storage options
    options: {
      local: {
        /* ... */
      },
      remote: {
        /* ... */
      },
    },
  },

  blockManager: {
    appendTo: '#blocks',
    blocks: [],
  },

  layerManager: {
    appendTo: '#layer-container',
  },
  styleManager: {
    appendTo: '#style-view',
    // sectors: [
    //     {
    //         name: "Dimension",
    //         open: false,
    //         buildProps: ["width", "min-height", "padding"],
    //         properties: [
    //             {
    //                 type: "integer",
    //                 name: "The Width",
    //                 property: "width",
    //                 units: ["px", "%", "rem"],
    //                 defaults: "auto",
    //                 min: 0,
    //             },
    //         ],
    //     },
    // ],
    sectors: [
      {
        name: 'General',
        properties: [
          {
            extend: 'float',
            type: 'radio',
            default: 'none',
            options: [
              { value: 'none', className: 'fa fa-times' },
              { value: 'left', className: 'fa fa-align-left' },
              { value: 'right', className: 'fa fa-align-right' },
            ],
          },
          'display',
          { extend: 'position', type: 'select' },
          'top',
          'right',
          'left',
          'bottom',
        ],
      },
      {
        name: 'Dimension',
        open: false,
        properties: [
          'width',
          {
            id: 'flex-width',
            type: 'integer',
            name: 'Width',
            units: ['px', '%'],
            property: 'flex-basis',
            toRequire: 1,
          },
          'height',
          'max-width',
          'min-height',
          'margin',
          'padding',
        ],
      },
      {
        name: 'Typography',
        open: false,
        properties: [
          'font-family',
          'font-size',
          'font-weight',
          'letter-spacing',
          'color',
          'line-height',
          {
            extend: 'text-align',
            options: [
              { id: 'left', label: 'Left', className: 'fa fa-align-left' },
              { id: 'center', label: 'Center', className: 'fa fa-align-center' },
              { id: 'right', label: 'Right', className: 'fa fa-align-right' },
              { id: 'justify', label: 'Justify', className: 'fa fa-align-justify' },
            ],
          },
          {
            property: 'text-decoration',
            type: 'radio',
            default: 'none',
            options: [
              { id: 'none', label: 'None', className: 'fa fa-times' },
              { id: 'underline', label: 'underline', className: 'fa fa-underline' },
              { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough' },
            ],
          },
          'text-shadow',
        ],
      },
      {
        name: 'Decorations',
        open: false,
        properties: [
          'opacity',
          'border-radius',
          'border',
          'box-shadow',
          'background', // { id: 'background-bg', property: 'background', type: 'bg' }
        ],
      },
      {
        name: 'Stack',
        type: 'stack',
        property: 'text-shadow',
        label: 'Stack type',
        // Additional props
        properties: [
          { type: 'number', units: ['px'], default: '0', property: 'x' },
          { type: 'number', units: ['px'], default: '0', property: 'y' },
          { type: 'number', units: ['px'], default: '0', property: 'blur' },
          { type: 'color', default: 'black', property: 'color' },
        ],
      },
      {
        name: 'Extra',
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
      },
      {
        name: 'Flex',
        open: false,
        properties: [
          {
            name: 'Flex Container',
            property: 'display',
            type: 'select',
            defaults: 'block',
            list: [
              { value: 'block', name: 'Disable' },
              { value: 'flex', name: 'Enable' },
            ],
          },
          {
            name: 'Flex Parent',
            property: 'label-parent-flex',
            type: 'integer',
          },
          {
            name: 'Direction',
            property: 'flex-direction',
            type: 'radio',
            defaults: 'row',
            list: [
              {
                value: 'row',
                name: 'Row',
                className: 'icons-flex icon-dir-row',
                title: 'Row',
              },
              {
                value: 'row-reverse',
                name: 'Row reverse',
                className: 'icons-flex icon-dir-row-rev',
                title: 'Row reverse',
              },
              {
                value: 'column',
                name: 'Column',
                title: 'Column',
                className: 'icons-flex icon-dir-col',
              },
              {
                value: 'column-reverse',
                name: 'Column reverse',
                title: 'Column reverse',
                className: 'icons-flex icon-dir-col-rev',
              },
            ],
          },
          {
            name: 'Justify',
            property: 'justify-content',
            type: 'radio',
            defaults: 'flex-start',
            list: [
              {
                value: 'flex-start',
                className: 'icons-flex icon-just-start',
                title: 'Start',
              },
              {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-just-end',
              },
              {
                value: 'space-between',
                title: 'Space between',
                className: 'icons-flex icon-just-sp-bet',
              },
              {
                value: 'space-around',
                title: 'Space around',
                className: 'icons-flex icon-just-sp-ar',
              },
              {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-just-sp-cent',
              },
            ],
          },
          {
            name: 'Align',
            property: 'align-items',
            type: 'radio',
            defaults: 'center',
            list: [
              {
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
              },
              {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
              },
              {
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
              },
              {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
              },
            ],
          },
          {
            name: 'Flex Children',
            property: 'label-parent-flex',
            type: 'integer',
          },
          {
            name: 'Order',
            property: 'order',
            type: 'integer',
            defaults: 0,
            min: 0,
          },
          {
            name: 'Flex',
            property: 'flex',
            type: 'composite',
            properties: [
              {
                name: 'Grow',
                property: 'flex-grow',
                type: 'integer',
                defaults: 0,
                min: 0,
              },
              {
                name: 'Shrink',
                property: 'flex-shrink',
                type: 'integer',
                defaults: 0,
                min: 0,
              },
              {
                name: 'Basis',
                property: 'flex-basis',
                type: 'integer',
                units: ['px', '%', ''],
                unit: '',
                defaults: 'auto',
              },
            ],
          },
          {
            name: 'Align',
            property: 'align-self',
            type: 'radio',
            defaults: 'auto',
            list: [
              {
                value: 'auto',
                name: 'Auto',
              },
              {
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
              },
              {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
              },
              {
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
              },
              {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
              },
            ],
          },
        ],
      },
    ],
  },
  traitManager: {
    appendTo: '#trait-container',
  },
  selectorManager: {
    appendTo: '#style-view',
  },
  panels: {
    defaults: [
      {
        id: 'basic-actions',
        el: '.panel__basic-action',
        buttons: [
          {
            id: 'visibility',
            active: true,
            className: 'btn-toggle-borders',
            label: '<i class="bi bi-border"></i>',
            command: 'sw-visibility',
          },
        ],
      },
      {
        id: 'editor-actions',
        el: '.panel__editor',
        buttons: [
          // {
          //   id: "saveDb",
          //   className: "fa fa-paper-plane btn-save",
          //   command: "saveDb",
          // },
          // {
          //   id: 'cmd-clear',
          //   className: 'fa fa-trash',
          //   command: 'cmd-clear',
          // },
          {
            id: 'undo',
            className: 'fa fa-undo',
            command: 'undo',
          },
          {
            id: 'redo',
            className: 'fa fa-repeat',
            command: 'redo',
          },
          // {
          //   id: "export",
          //   className: "fa fa-download",
          //   command: "export",
          // },
          // {
          //       id: "preview",
          //       className: "fa fa-eye",
          //       command: "preview",
          //   },
        ],
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        // buttons: [
        //   {
        //     id: 'device-desktop',
        //     label: "<i class='bi bi-laptop'></i>",
        //     command: 'set-device-desktop',
        //     active: true,
        //     togglable: false,
        //   },
        //   {
        //     id: 'device-mobile',
        //     label: "<i class='bi bi-phone'></i>",
        //     command: 'set-device-mobile',
        //     togglable: false,
        //   },
        // ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: 'Desktop',
        width: '',
      },
      {
        name: 'Mobile',
        width: '320px',
        widthMedia: '480px',
      },
    ],
  },

  pageManager: {
    pages: [
      {
        id: 'Login',
        name: 'Login',
        component: '<div id="comp1">Main Page</div>',
        styles: `#comp1 { color: red }`,
      }
      // {
      //   id: 'page-2',
      //   name: 'Page 2',
      //   component: '<div id="comp2">Page 2</div>',
      //   styles: `#comp2 { color: green }`,
      // }, {
      //   id: 'page-3',
      //   name: 'Page 3',
      //   component: '<div id="comp3">Page 3</div>',
      //   styles: `#comp3 { color: blue }`,
      // }
    ],
  },

  // plugins: ["gjs-blocks-basic","grapesjs-plugin-forms","grapesjs-style-bg","grapesjs-tabs"],
  // pluginsOpts: {
  //     "gjs-blocks-basic": {},
  //     "grapesjs-plugin-forms":{},
  //     "grapesjs-style-bg":{},

  //     "grapesjs-tabs":{}

  // },
  plugins: ['gjs-blocks-basic', 'grapesjs-blocks-bootstrap4', 'grapesjs-template-manager','grapesjs-navbar'],
  pluginsOpts: {
    'gjs-blocks-basic': {},
    'grapesjs-blocks-bootstrap4': {},
    'grapesjs-project-manager': {},
    'grapesjs-navbar': {},
  },
  canvas: {
    styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'],
    scripts: [
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
      'https://cdn.tailwindcss.com',
    ],
  },

  dragMode: 'absolute', // 'absolute' | 'translate'
});

// const currentPage = pages[currentIndex];
// currentPage.components = editor.getComponents();
// currentPage.style = editor.getStyle();

// const nextPage = pages[nextIndex];
// editor.setComponents(nextPage.components);
// editor.setStyle(nextPage.style);

const allPages = editor.Pages.getAll();
const htmlAll = allPages.map(p => p.getMainComponent().toHTML())

const pageManager = editor.Pages;

const arrayOfPages = pageManager.getAll();

// const newPage = pageManager.add({
//   id: 'new-page-id', // without an explicit ID, a random one will be created
//   styles: `.my-class { color: red }`, // or a JSON of styles
//   component: '<div class="my-class">My element</div>', // or a JSON of components
// });

const pagesApp = new Vue({
  el: '.pages-wrp',
  data: { pages: [] },
  computed: {
    pm() {
      return editor.Pages;
    },
  },
  mounted() {
    const { pm } = this;
    this.setPages(pm.getAll());
    editor.on('page', () => {
      this.pages = [...pm.getAll()];
    });
  },
  methods: {
    setPages(pages) {
      this.pages = [...pages];
    },
    isSelected(page) {
      return this.pm.getSelected().id == page.id;
    },
    selectPage(pageId, event) {
      if(event.detail==2){
        $('#rename').val(pageId);
        $('#renamePageModal').modal('toggle');
       
      }
      return this.pm.select(pageId);
    },
    removePage(pageId) {
      return this.pm.remove(pageId);
    }
  },
});
addPage = function (pageId) {

  var pm = editor.Pages;

  const len = pm.getAll().length;

  pm.add({
    name: pageId,
    id: pageId,
    component: '<div>New page</div>',
  });
  $('#addPageModal').modal('toggle');
};

renamePage = function(){
 var pm= editor.Pages.getSelected();
 var newname = $("#rename").val();
}
//  const removedPage = pageManager.remove('page-id');

const pn = editor.Panels;
const panelOpts = pn.addPanel({
  id: 'options',
});

pn.addButton('options', {
  id: 'open-templates',
  className: 'fa fa-folder-o',
  attributes: {
    title: 'Open projects and templates',
  },
  command: 'open-templates', //Open modal
});
pn.addButton('views', {
  id: 'open-pages',
  className: 'fa fa-file-o',
  attributes: {
    title: 'Take Screenshot',
  },
  command: 'open-pages',
  togglable: false,
});



const somePage = pageManager.get('page-id');

const mainPage = pageManager.getMain();

const wrappers = pageManager.getAllWrappers();

const allImages = wrappers.map((wrp) => wrp.findType('image')).flat();

const selectedPage = pageManager.getSelected();

pageManager.select('page-id');

const selected = editor.getSelected();
// Scroll smoothly (this behavior can be polyfilled)
// canvas.scrollTo(selected, { behavior: 'smooth' });
// Force the scroll, even if the element is alredy visible
// canvas.scrollTo(selected, { force: true });

editor.setDragMode('absolute');
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});
editor.Commands.add('preview', { run: (editor) => editor.preview.Manager.preview() });

editor.on('run:preview', () => {
  editor.stopCommand('sw-visibility');
  navbar.removeClass('sidebar');
  mainContent.removeClass('main-content');
  panelTopBar.addClass('d-none');
});
editor.on('stop:preview', () => {
  editor.runCommand('sw-visibility');
  navbar.addClass('sidebar');
  mainContent.addClass('main-content');
  panelTopBar.removeClass('d-none');
});

editor.Commands.add('cmd-clear', {
  run: (editor) => {
    editor.DomComponents.clear();
    editor.CssComposer.clear();
  },
});

//Undo
editor.Commands.add('undo', {
  run: (editor) => editor.UndoManager.undo(),
});

// Redo
editor.Commands.add('redo', {
  run: (editor) => editor.UndoManager.redo(),
});

editor.Commands.add('export', {
  run: (editor) => editor.runCommand('gjs-export-zip'),
});

editor.DomComponents.addType('my-input-type', {
  // Make the editor understand when to bind `my-input-type`
  isComponent: (el) => el.tagName === 'INPUT',
});

// function code()
// {
//      var demo = editor.getHtml();
//      var democss = editor.getCss();
//      var demojs = editor.getJs();
//      alert(demo);
//      alert(democss);
//      alert(demojs);
// }
//    function code()
//    {
//        const fs = require('fs')
//        const demo = editor.getHtml();
//         fs.writeFile('/Users/praneethadrai/Documents/Praneetha/React/ex.txt',demo, err => {
//             if(err)
//             {
//                 console.error(err);
//             }
//         }
//         );

//    }

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

function refreshObjs() {
  readTextFile('/resources/js/custom/form-1.json', function (text) {
    var data = JSON.parse(text);

    for (var block = 0; block < data.length; block++) {
      editor.BlockManager.add(data[block].id, data[block]);
    }
  });
}
//usage:
refreshObjs();

function saveObj() {
  var obj = {};
  var reg = /\<body[^>]*\>([^]*)\<\/body/m;
  var content = editor.getHtml().match(reg)[1];
  obj.label = $('#objId').val();
  obj.id = obj.label;

  var attr = {};
  // alert(editor.getCss());
  attr.class = editor.getCss();
  obj.attributes = attr;
  obj.content = content;

  updateRecord('/objAddition', obj);
  closeModal();
  window.location.reload();
}
function openSaveObjModal() {
  $('#objId').val('');
  $('#largeModal').modal('show');
}

function addNewPage() {
 
  var name=document.getElementById("name").value;
  
  addPage(name);
  
}

function closeModal() {
  $('#largeModal').modal('hide');
}
function updateRecord(url, obj) {
  $.ajax({
    contentType: 'application/json',
    url: url,
    method: 'POST',
    data: JSON.stringify(obj),
    dataType: 'json',
    success: function (data) {
      console.log(data);
      alert(data);
    },
    error: function (data) {
      if (data.statusText != 'OK') alert('error: ' + data.responseText);
      else alert(data.responseText);
    },
  });
}
function code() {
  var demo =
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"><style>' +
    'html {position:fixed;top:0;bottom:0;left:0;right:0;}body {margin: 0;width: 100vw;height: 100vh;}div {width: 100vw;height: 100vh;}'
    +'#body {width: 100%;height: 100%;}.modal {width: 50vw;height: 50vh;height: calc(var(--vh, 1vh) * 50);}'
    +editor.getCss() +'</style><script>'+editor.getJs()+'</script><title>'
    +editor.Pages.getSelected().getName()+'</title></head>'+
    editor.getHtml() +
    '</html>';

    const allPages = editor.Pages.getAll();
const htmlAll = allPages.map(p => p.getMainComponent().toHTML())
alert(htmlAll)

  var userInfo = { demo: demo, page: editor.Pages.getSelected().getName() };
  updateRecord('/elementContent', userInfo);
}

// function addPage() {
//   const { pm } = this;
//   const len = pm.getAll().length;
//   pm.add({
//     name: `Page ${len + 1}`,
//     component: '<div>New page</div>',
//   });
// }
// editor.setComponents('<div class="c">HEllo</div>');
function addnavigation()
{
  prompt('Enter button id')
  prompt('Enter the html page to navigate to')
}