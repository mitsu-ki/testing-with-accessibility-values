import { Selector, ClientFunction } from "testcafe";
import { screen } from "@testing-library/testcafe";

const testUrl = "http://localhost:3000/";

fixture("get accessibility values").page(testUrl);

test("role, label で 要素取得", async (t) => {
  const dialog = screen.getByLabelText("クイズ結果");

  await t
    .click(screen.getByLabelText("マル"))
    .expect(dialog.innerText)
    .eql("正解");
});

test("複数 role から要素取得", async (t) => {
  const getLocation = await ClientFunction(() => window.location.href);

  await t
    .click(screen.queryAllByLabelText("Google").nth(1))
    .expect(getLocation())
    .eql(`${testUrl}#google`);
});
