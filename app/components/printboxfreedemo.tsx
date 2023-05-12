import { useEffect } from "react"

interface IPrintbox {
  printboxSessionId?: string
  productFamilyId?: number
}

export function PrintboxDemoEmbed({ printboxSessionId, productFamilyId }: IPrintbox) {
  useEffect(() => {
    console.log({ printboxSessionId, productFamilyId })

    initPrintbox()
  }, []);

  function initPrintbox() {
    (window as any).printbox.setEditorConfig({
      projectId: '',
      productFamilyId: (productFamilyId || process.env.PRODUCT_ID_DEMO).toString(),
      moduleId: '4',
      storeName: 'default_store',
      showPrice: true,
      currency: 'EUR',
      sessionId: '',
      translationsLanguage: 'en',
      contentLanguage: 'en',
      language: 'en',
      locale: 'en-GB',
    });

    (window as any).printbox.authUserRequest = () => {
      console.log('authUserRequest')
      return new Promise((resolve) => {
        resolve(printboxSessionId)
      })
    };

    (window as any).printbox.savingFinished = (projectId: string) => {
      console.log('savingFinished', projectId);

      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/projects/lockproject?project_id="+projectId, true);
      xhttp.send();
      
      return new Promise((resolve: any) => {
        resolve()
      })
    };

    (window as any).printbox.beginGoToCart = () => {
      console.log('beginGoToCart')
      return new Promise((resolve: any) => {
        resolve()
      })
    };

    (window as any).printbox.showECommerce = () => {
      console.log('showECommerce')
      return new Promise((resolve: any) => {
        resolve()
      })
    };

    (window as any).printbox.goToCartFinished = async (projectId: string) => {
      console.log('goToCartFinished', projectId)

      location.href = `/orders/success?projectId=${projectId}`

      return new Promise(function (resolve) {
        resolve(true)
      })
    };
  }

  return (
    <div id="app" style={{ margin: '5vw 0' }}></div>
  );
}