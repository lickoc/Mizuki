import type { FooterConfig } from "../types/config";

// 页脚配置
export const footerConfig: FooterConfig = {
	enable: true, // 是否启用Footer HTML注入功能
	customHtml:
		'<a class="transition link text-[var(--primary)] font-medium" href="/privacy/">隐私政策</a> | <a class="transition link text-[var(--primary)] font-medium" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">鄂ICP备2026047104号-1</a> | <img src="/beian-icon.png" alt="备案图标" style="display:inline-block;height:14px;vertical-align:middle" /> <a class="transition link text-[var(--primary)] font-medium" href="https://beian.mps.gov.cn/#/query/webSearch?code=42900402000910" rel="noreferrer" target="_blank">鄂公网安备42900402000910号</a>', // HTML格式的自定义页脚信息，例如备案号等，默认留空
	// 也可以直接编辑 FooterConfig.html 文件来添加备案号等自定义内容
	// 注意：若 customHtml 不为空，则使用 customHtml 中的内容；若 customHtml 留空，则使用 FooterConfig.html 文件中的内容
	// FooterConfig.html 可能会在未来的某个版本弃用
};
