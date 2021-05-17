import { all } from 'core-js/fn/promise'
import JSZip from 'jszip'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditorActionMenu',
  data: () => ({
    previewDialogVisible: false,
    propsPanelWidth: 320
  }),
  computed: {
    ...mapState('editor', {
      editingPage: state => state.editingPage,
      editingElement: state => state.editingElement,
      elements: state => state.editingPage.elements,
      pages: state => state.work.pages,
      work: state => state.work
    }),
    ...mapState('loading', [
      'saveWork_loading',
      'previewWork_loading',
      'setWorkAsTemplate_loading',
      'uploadWorkCover_loading'
    ])
  },
  methods: {
    ...mapActions('editor', [
      'elementManager',
      'pageManager',
      'saveWork',
      'createWork',
      'fetchWork',
      'fetchDownload',
      'updateWork',
      'setWorkAsTemplate',
      // 'setEditingElement',
      'Downloader',
      'setEditingPage'
    ]),
    ...mapActions('loading', {
      updateLoading: 'update'
    }),
    handlePreview () {
      this.saveWork({ loadingName: 'previewWork_loading' }).then(() => {
        this.$emit('preview')
        // this.previewDialogVisible = true
      })
    },
    handleSave () {
      this.saveWork({ isSaveCover: true })
    },
    handlePublish () {
      this.updateWork({ is_publish: true })
      this.saveWork({ successMsg: '发布成功' })
    },
    //donwload edited
    handleDownload () {
      // var zip = new JSZip();
      // zip.file("luban.html", $.get("http://localhost:8080/works/preview/"+ this.work.id, {base64: true}));
      // zip.generateAsync({type: "blob"})
      // .then(function(content){
      //   saveAs(content, "lubana.zip");
      // });
      
      var zip = new JSZip();
      var a = document.querySelector("a");
      var urls = ["http://localhost:8080/works/preview/"+ this.work.id];
      var urls2 = ["http://localhost:8080/uploads/abc_beff3889cb.mp4"];
      var urls3 = ["http://localhost:8080/uploads/lbp_picture_placeholder_aa9bb3d3_7d59dbda0f.png"];
      var urls4 = ["http://localhost:8080/uploads/bg_music_fbd2dc70_64e48c2c79.svg"];
      var urls5 = ["http://localhost:8080/uploads/play_ce01ff8e_632a4182e3.svg"];
      var urls6 = ["http://localhost:8080/uploads/App_4fc76de314.vue"];
      var urls7 = ["http://localhost:8080/uploads/favicon_d5e36decbf.ico"];
      var urls8 = ["http://localhost:8080/uploads/engine_umd_6fc1c94561.js"];

      const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        }));


        function request(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("open.html", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  // zip.file("uploads/abc_beff3889cb.mp4", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});

                  // zip.file("img/lbp-picture-placeholder.aa9bb3d3.png", dataUrl.substr(dataUrl.indexOf(',')+1));
                  // zip.file("bg-music.fbd2dc70.svg", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  // zip.file("play.ce01ff8e.svg", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  // zip.file("App.vue", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  // zip.file("favicon.ico", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  
                  resolve()
                });
                })
        }
        function request2(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("uploads/abc_beff3889cb.mp4", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request3(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("img/lbp-picture-placeholder.aa9bb3d3.png", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request4(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("img/bg-music.fbd2dc70.svg", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request5(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("img/play.ce01ff8e.svg", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request6(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("App.vue", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request7(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("favicon.ico", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }
        function request8(url) {
          return new Promise(function(resolve) {
            toDataURL(url)
                .then(dataUrl => {
                  zip.file("engine.umd.js", dataUrl.substr(dataUrl.indexOf(',')+1), {base64: true});
                  resolve()
                });
                })
        }

        Promise.all(urls.map(function(url) {
            return request(url)
          })
          
        )
        Promise.all(
          urls2.map(function(url) {
            return request2(url)
          })
        )  
        Promise.all(
          urls3.map(function(url) {
            return request3(url)
          })
        )  
        Promise.all(
          urls4.map(function(url) {
            return request4(url)
          })
        )  
        Promise.all(
          urls5.map(function(url) {
            return request5(url)
          })
        )  
        Promise.all(
          urls6.map(function(url) {
            return request6(url)
          })
        )  
        Promise.all(
          urls7.map(function(url) {
            return request7(url)
          })
        )  
        Promise.all(
          urls8.map(function(url) {
            return request8(url)
          })
        )  
          .then(function() {
            console.log(zip);
            zip.generateAsync({
                type: "blob"
            })
        
          .then(function(content) {
            saveAs(content, "Completed.zip" )
            });
          })
            
      
    
    },
    handleSetAsTemplate () {
      this.updateLoading({ type: 'setWorkAsTemplate_loading', value: true })
      this.saveWork().then(() => {
        this.setWorkAsTemplate()
      })
    },
    handleSelectItem ({ key }) {
      switch (key) {
        case 'setAsTemplate':
          this.handleSetAsTemplate()
      }
    },
    
  },
  render (h) {
    return (
      <a-menu
        slot="action-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: 'right', background: 'transparent' }}
      >
        {/* 保存、预览、发布、设置为模板 */}

        <a-menu-item key="1" class="transparent-bg">
          <a-button
            type="primary"
            size="small"
            onClick={this.handlePreview}
            loading={this.previewWork_loading}
          >{this.$t('editor.header.preview')}</a-button>
        </a-menu-item>

        <a-menu-item key="2" class="transparent-bg">
          <a-button
            size="small"
            onClick={this.handleSave}
            loading={this.saveWork_loading || this.uploadWorkCover_loading}
          >{this.$t('editor.header.save')}</a-button>
        </a-menu-item>

        <a-menu-item key="4" class="transparent-bg">
          <a-button
            size="small"
            
            onClick={this.handleDownload}
          >{this.$t('editor.header.download')}</a-button>
        </a-menu-item>
        {/*edited */}

        {/* <a-menu-item key="3" class="transparent-bg"><a-button size="small">发布</a-button></a-menu-item> */}
        <a-menu-item key="3" class="transparent-bg">
          <a-dropdown-button
            size="small"
            onClick={this.handlePublish}
            loading={this.saveWork_loading || this.uploadWorkCover_loading}
          >
            {this.$t('editor.header.publish') /* 发布 */}
            <a-menu slot="overlay" onClick={this.handleSelectItem}>
              <a-menu-item key="setAsTemplate">
                <a-spin spinning={this.setWorkAsTemplate_loading} size="small">
                  {/* 设置为模板 */}
                  <a-icon type="cloud-upload" />{this.$t('editor.header.setAsTemplate')}
                </a-spin>
              </a-menu-item>
              {/* <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item> */}
              {/* <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item> */}
            </a-menu>
          </a-dropdown-button>
        </a-menu-item>
      </a-menu>
    )
  }
}
