// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const dialog = flutter_sdk.src__material__dialog;
  const text = flutter_sdk.src__widgets__text;
  const icon_button = flutter_sdk.src__material__icon_button;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const navigator = flutter_sdk.src__widgets__navigator;
  const list_tile = flutter_sdk.src__material__list_tile;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const basic = flutter_sdk.src__widgets__basic;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const text_input = flutter_sdk.src__services__text_input;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $trim = dartx.trim;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $removeAt = dartx.removeAt;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfContact: () => (T.JSArrayOfContact = dart.constFn(_interceptors.JSArray$(main.Contact)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))(),
    BuildContextAndintToWidget: () => (T.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 12
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.ContactApp = class ContactApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Contact List", home: new main.ContactListPage.new(), debugShowCheckedModeBanner: false});
    }
    static ['_#new#tearOff']() {
      return new main.ContactApp.new();
    }
  };
  (main.ContactApp.new = function() {
    main.ContactApp.__proto__.new.call(this);
    ;
  }).prototype = main.ContactApp.prototype;
  dart.addTypeTests(main.ContactApp);
  dart.addTypeCaches(main.ContactApp);
  dart.setMethodSignature(main.ContactApp, () => ({
    __proto__: dart.getMethods(main.ContactApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.ContactApp, I[0]);
  var name$ = dart.privateName(main, "Contact.name");
  var number$ = dart.privateName(main, "Contact.number");
  main.Contact = class Contact extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get number() {
      return this[number$];
    }
    set number(value) {
      super.number = value;
    }
    static ['_#new#tearOff'](name, number) {
      return new main.Contact.new(name, number);
    }
  };
  (main.Contact.new = function(name, number) {
    this[name$] = name;
    this[number$] = number;
    ;
  }).prototype = main.Contact.prototype;
  dart.addTypeTests(main.Contact);
  dart.addTypeCaches(main.Contact);
  dart.setLibraryUri(main.Contact, I[0]);
  dart.setFieldSignature(main.Contact, () => ({
    __proto__: dart.getFields(main.Contact.__proto__),
    name: dart.finalFieldType(core.String),
    number: dart.finalFieldType(core.String)
  }));
  main.ContactListPage = class ContactListPage extends framework.StatefulWidget {
    createState() {
      return new main._ContactListPageState.new();
    }
    static ['_#new#tearOff']() {
      return new main.ContactListPage.new();
    }
  };
  (main.ContactListPage.new = function() {
    main.ContactListPage.__proto__.new.call(this);
    ;
  }).prototype = main.ContactListPage.prototype;
  dart.addTypeTests(main.ContactListPage);
  dart.addTypeCaches(main.ContactListPage);
  dart.setMethodSignature(main.ContactListPage, () => ({
    __proto__: dart.getMethods(main.ContactListPage.__proto__),
    createState: dart.fnType(main._ContactListPageState, [])
  }));
  dart.setLibraryUri(main.ContactListPage, I[0]);
  var _nameController = dart.privateName(main, "_nameController");
  var _numberController = dart.privateName(main, "_numberController");
  var _contacts = dart.privateName(main, "_contacts");
  var _addContact = dart.privateName(main, "_addContact");
  var _deleteContact = dart.privateName(main, "_deleteContact");
  var _showDeleteConfirmation = dart.privateName(main, "_showDeleteConfirmation");
  var _buildContactTile = dart.privateName(main, "_buildContactTile");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  main._ContactListPageState = class _ContactListPageState extends framework.State$(main.ContactListPage) {
    [_addContact]() {
      let name = this[_nameController].text[$trim]();
      let number = this[_numberController].text[$trim]();
      if (name[$isNotEmpty] && number[$isNotEmpty]) {
        this.setState(dart.fn(() => {
          this[_contacts][$add](new main.Contact.new(name, number));
          this[_nameController].clear();
          this[_numberController].clear();
        }, T.VoidTovoid()));
      }
    }
    [_deleteContact](index) {
      this.setState(dart.fn(() => {
        this[_contacts][$removeAt](index);
      }, T.VoidTovoid()));
    }
    [_showDeleteConfirmation](index) {
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(ctx => new dialog.AlertDialog.new({title: new text.Text.new("Confirmation"), content: new text.Text.new("Are you sure for Delete?"), actions: T.JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.cancel), onPressed: dart.fn(() => navigator.Navigator.of(ctx).pop(T.ObjectN()), T.VoidTovoid())}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.delete), onPressed: dart.fn(() => {
                this[_deleteContact](index);
                navigator.Navigator.of(ctx).pop(T.ObjectN());
              }, T.VoidTovoid())})])}), T.BuildContextToAlertDialog())});
    }
    [_buildContactTile](contact, index) {
      return new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.person), title: new text.Text.new(contact.name, {style: new text_style.TextStyle.new({color: colors.Colors.red, fontWeight: ui.FontWeight.bold})}), subtitle: new text.Text.new(contact.number), trailing: new icon.Icon.new(icons.Icons.phone, {color: colors.Colors.blue}), onLongPress: dart.fn(() => this[_showDeleteConfirmation](index), T.VoidTovoid())});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Contact List"), backgroundColor: colors.Colors.blueGrey}), body: new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text_field.TextField.new({controller: this[_nameController], decoration: new input_decorator.InputDecoration.new({labelText: "Name"})}), new text_field.TextField.new({controller: this[_numberController], decoration: new input_decorator.InputDecoration.new({labelText: "Number"}), keyboardType: text_input.TextInputType.phone}), new basic.SizedBox.new({height: 10}), new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _addContact), child: new text.Text.new("Add"), style: elevated_button.ElevatedButton.styleFrom({backgroundColor: colors.Colors.blueGrey})}), new basic.SizedBox.new({height: 10}), new basic.Expanded.new({child: this[_contacts][$isEmpty] ? new basic.Center.new({child: new text.Text.new("No contacts added yet.")}) : new scroll_view.ListView.builder({itemCount: this[_contacts][$length], itemBuilder: dart.fn((ctx, index) => this[_buildContactTile](this[_contacts][$_get](index), index), T.BuildContextAndintToWidget())})})])})})});
    }
    static ['_#new#tearOff']() {
      return new main._ContactListPageState.new();
    }
  };
  (main._ContactListPageState.new = function() {
    this[_nameController] = new editable_text.TextEditingController.new();
    this[_numberController] = new editable_text.TextEditingController.new();
    this[_contacts] = T.JSArrayOfContact().of([]);
    main._ContactListPageState.__proto__.new.call(this);
    ;
  }).prototype = main._ContactListPageState.prototype;
  dart.addTypeTests(main._ContactListPageState);
  dart.addTypeCaches(main._ContactListPageState);
  dart.setMethodSignature(main._ContactListPageState, () => ({
    __proto__: dart.getMethods(main._ContactListPageState.__proto__),
    [_addContact]: dart.fnType(dart.void, []),
    [_deleteContact]: dart.fnType(dart.void, [core.int]),
    [_showDeleteConfirmation]: dart.fnType(dart.void, [core.int]),
    [_buildContactTile]: dart.fnType(framework.Widget, [main.Contact, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._ContactListPageState, I[0]);
  dart.setFieldSignature(main._ContactListPageState, () => ({
    __proto__: dart.getFields(main._ContactListPageState.__proto__),
    [_nameController]: dart.finalFieldType(editable_text.TextEditingController),
    [_numberController]: dart.finalFieldType(editable_text.TextEditingController),
    [_contacts]: dart.finalFieldType(core.List$(main.Contact))
  }));
  main.main = function main$0() {
    binding.runApp(new main.ContactApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,iCACE,sBACD,4DACsB;IAEhC;;;;;;;;EACF;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;;;;;+BAEA,MAAW;IAAX;IAAW;;EAAO;;;;;;;;;;;AAKQ;IAAuB;;;;;;;;EAChE;;;;;;;;;;;;;;;;;;;;;AAQU,iBAAO,AAAgB,AAAK;AAC5B,mBAAS,AAAkB,AAAK;AAEtC,UAAI,AAAK,IAAD,iBAAe,AAAO,MAAD;AAKzB,QAJF,cAAS;AAC6B,UAApC,AAAU,sBAAI,qBAAQ,IAAI,EAAE,MAAM;AACX,UAAvB,AAAgB;AACS,UAAzB,AAAkB;;;IAGxB;qBAEwB;AAGpB,MAFF,cAAS;AACkB,QAAzB,AAAU,2BAAS,KAAK;;IAE5B;8BAEiC;AAoB9B,MAnBD,0CACW,uBACA,QAAC,OAAQ,mCACT,kBAAK,0BACH,kBAAK,sCACL,wBACP,sCACQ,kBAAW,gCACN,cAAgB,AAAQ,uBAAL,GAAG,uCAEnC,sCACQ,kBAAW,gCACN;AACY,gBAArB,qBAAe,KAAK;AACG,gBAAb,AAAQ,uBAAL,GAAG;;IAM5B;wBAEiC,SAAa;AAC5C,YAAO,sCACI,kBAAW,4BACb,kBACL,AAAQ,OAAD,eACA,qCAAwB,+BAA4B,kCAEnD,kBAAK,AAAQ,OAAD,oBACZ,kBAAW,2BAAqB,mCAC7B,cAAM,8BAAwB,KAAK;IAEpD;UAG0B;AACxB,YAAO,oCACG,+BACC,kBAAK,kCACY,gCAEpB,sDAEG,gCACK,wBACR,0CACc,mCACA,oDAA2B,YAEzC,0CACc,qCACA,oDAA2B,0BACX,kCAE9B,gCAAiB,MACjB,6DACa,2BACJ,kBAAK,eACU,2DAAkC,4BAE1D,gCAAiB,MACjB,+BACS,AAAU,4BACX,6BAAc,kBAAK,8BACV,6CACI,AAAU,uCACR,SAAC,KAAK,UACf,wBAAkB,AAAS,uBAAC,KAAK,GAAG,KAAK;IAOjE;;;;;;IAnGM,wBAAkB;IAClB,0BAAoB;IACN,kBAAY;;;EAkGlC;;;;;;;;;;;;;;;;;;;AA/HsB,IAApB,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
