import { Selector, ClientFunction } from "testcafe";

const testUrl = "http://localhost:3000/";

fixture("get accessibility values").page(testUrl);

test("role, label で 要素取得", async (t) => {
  const dialog = Selector('div[aria-label="クイズ"] div[role="dialog"]');

  await t
    .click('div[aria-label="クイズ"] button[aria-label="マル"]')
    .expect(dialog.innerText)
    .eql("正解");
});

test("複数 role から要素取得", async (t) => {
  const getLocation = await ClientFunction(() => window.location.href);

  await t
    .click(
      'nav[role="navigation"][aria-label="ページ内リンク"] a[aria-label="Google"]'
    )
    .expect(getLocation())
    .eql(`${testUrl}#google`);
});
