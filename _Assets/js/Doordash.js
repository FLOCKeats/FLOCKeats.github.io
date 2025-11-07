    <script>

     (function(e, t, r, n) {

        var o, c, s;

        o = e.document, c = t.children[0], s = o.createElement("script"), e.StorefrontSDKObject = "StorefrontSDK", e[e.StorefrontSDKObject] = {

            executeCommand: function(t, r) {

                e[e.StorefrontSDKObject].buffer.push([t, r])

            },

            buffer: []

        }, s.async = 1, s.src ='https://web-apps.cdn4dd.com/webapps/sdk-storefront/latest/sdk.js' , t.insertBefore(s, c)

    })(window, document.head);

    StorefrontSDK.executeCommand('renderFloatingButton', {

        businessId: 70458950,

        businessSlug: 'FLOCK Eats',

        floatingBar: true,

        position: 'bottom',

        buttonAlignment: 'center',

        backgroundColor: 'transparent',

        buttonBackgroundColor: '#D92128',

        borderColor: 'transparent',

        buttonText: 'Order Delivery',

        showModal: true

      } 

    )

    </script>
