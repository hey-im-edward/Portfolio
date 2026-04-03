type JsonLdScriptProps = {
  payload: string;
};

function JsonLdScript({ payload }: JsonLdScriptProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: payload }} />;
}

export { JsonLdScript };
