import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, _ as Presence, Q as Primitive, O as useControllableState, a0 as useComposedRefs, Y as composeEventHandlers, a9 as usePrevious, aa as useSize, $ as createContextScope, C as Check, v as cn, u as useApp, m as motion, ab as User, I as Input, B as Button, b as ue, a as MessageCircle, G as Globe, d as Bell, Z as Zap, a8 as Volume2, X, T as Textarea } from "./index-BlWpIyR8.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, f as AlertDialogFooter, g as AlertDialogCancel } from "./alert-dialog-7FHU0NtI.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { L as Label } from "./label-DrmZZQeS.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bt_vSzJy.js";
import { S as Switch } from "./switch-Cx12Axum.js";
import { S as Smartphone } from "./smartphone-DJwZVx5d.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { P as Phone } from "./phone-Boo-rxzQ.js";
import { S as ShieldCheck } from "./shield-check-SG0as2WD.js";
import { L as Lock } from "./lock-D6SFrzne.js";
import { S as Shield } from "./shield-BtA-oc8E.js";
import { C as ChevronRight } from "./chevron-right-DBH-VzQy.js";
import { U as UserMinus } from "./user-minus-IIm4QPAm.js";
import { C as CircleHelp } from "./circle-help-D-L8_5v3.js";
import { F as FileText } from "./file-text--vkZEpl3.js";
import { U as UserX } from "./user-x-5lCfd0B1.js";
import { L as LogOut } from "./log-out-CbpoBa2g.js";
import { T as Trash2 } from "./trash-2-BBHB0PWB.js";
import { U as Undo2 } from "./undo-2-CpKm_Wz1.js";
import { D as Download } from "./download-bwGeHIgr.js";
import "./index-D4ku5XXv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
];
const Laptop = createLucideIcon("laptop", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
function SectionHeader({ title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 mb-2 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-white/40 uppercase tracking-widest", children: title }) });
}
function SettingRow({
  icon,
  label,
  sublabel,
  right,
  onClick,
  ocid
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: label }),
      sublabel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: sublabel })
    ] }),
    right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: right }),
    onClick && !right && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25 flex-shrink-0" })
  ] });
  if (onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": ocid,
        className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors text-left",
        onClick,
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": ocid, className: "flex items-center gap-3 px-4 py-3.5", children: inner });
}
function SectionCard({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)"
      },
      children
    }
  );
}
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 h-px bg-white/5" });
}
function DeactivateDialog({ lang }) {
  const [open, setOpen] = reactExports.useState(false);
  const [confirmText, setConfirmText] = reactExports.useState("");
  const isHi = lang === "hi";
  const handleDeactivate = () => {
    if (confirmText !== "DEACTIVATE") {
      ue.error(
        isHi ? "कृपया DEACTIVATE टाइप करें" : "Please type DEACTIVATE to confirm"
      );
      return;
    }
    setOpen(false);
    setConfirmText("");
    ue.warning(
      isHi ? "अकाउंट 30 दिनों के लिए निष्क्रिय कर दिया गया" : "Account deactivated for 30 days"
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "settings.deactivate.button",
        size: "sm",
        variant: "outline",
        className: "border-orange-700/50 text-orange-400 hover:bg-orange-900/20 h-8 text-[12px] px-4",
        children: isHi ? "निष्क्रिय करें" : "Deactivate"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-[#1A1F26] border-orange-900/40 max-w-sm mx-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-white text-[16px]", children: isHi ? "अकाउंट निष्क्रिय करें?" : "Deactivate Account?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-3 rounded-xl",
            style: {
              background: "rgba(251,146,60,0.08)",
              border: "1px solid rgba(251,146,60,0.2)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-orange-300/90 leading-relaxed", children: isHi ? "आपका अकाउंट 30 दिनों के लिए छिपा दिया जाएगा। लॉग इन करके इसे पुनः सक्रिय कर सकते हैं।" : "Your account will be hidden for 30 days. You can reactivate it by logging back in at any time." })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-white/60", children: isHi ? "कन्फर्म करने के लिए DEACTIVATE टाइप करें" : "Type DEACTIVATE to confirm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              "data-ocid": "settings.deactivate.confirm_input",
              value: confirmText,
              onChange: (e) => setConfirmText(e.target.value),
              placeholder: "DEACTIVATE",
              className: "bg-white/5 border-white/10 text-white placeholder:text-white/25 h-9 text-[13px] font-mono"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogCancel,
          {
            className: "flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-9 text-[13px]",
            onClick: () => setConfirmText(""),
            children: isHi ? "रद्द करें" : "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "settings.deactivate.confirm_button",
            size: "sm",
            disabled: confirmText !== "DEACTIVATE",
            onClick: handleDeactivate,
            className: "flex-1 h-9 text-[13px] text-white border-0",
            style: {
              background: confirmText === "DEACTIVATE" ? "#f97316" : "rgba(249,115,22,0.3)"
            },
            children: isHi ? "निष्क्रिय करें" : "Deactivate"
          }
        )
      ] })
    ] })
  ] });
}
function DeleteAccountFlow({
  lang,
  navigate
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState(1);
  const [surveyReason, setSurveyReason] = reactExports.useState("");
  const [surveyFeedback, setSurveyFeedback] = reactExports.useState("");
  const [deleteText, setDeleteText] = reactExports.useState("");
  const [understood, setUnderstood] = reactExports.useState(false);
  const [deleting, setDeleting] = reactExports.useState(false);
  const [deleted, setDeleted] = reactExports.useState(false);
  const [countdown] = reactExports.useState(30);
  const isHi = lang === "hi";
  const REASONS = [
    { en: "Too many notifications", hi: "बहुत अधिक सूचनाएं" },
    { en: "Privacy concerns", hi: "गोपनीयता संबंधी चिंताएं" },
    { en: "Found a better app", hi: "बेहतर ऐप मिली" },
    { en: "Not useful anymore", hi: "अब उपयोगी नहीं" },
    { en: "Other", hi: "अन्य" }
  ];
  const resetAll = () => {
    setStep(1);
    setSurveyReason("");
    setSurveyFeedback("");
    setDeleteText("");
    setUnderstood(false);
    setDeleting(false);
    setDeleted(false);
  };
  const handleOpen = (v) => {
    if (!v) resetAll();
    setOpen(v);
  };
  const handleFinalDelete = () => {
    if (deleteText !== "DELETE" || !understood) return;
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      setDeleted(true);
    }, 1200);
  };
  const canConfirm = deleteText === "DELETE" && understood;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { open, onOpenChange: handleOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "settings.delete_account.open_modal_button",
        size: "sm",
        className: "bg-red-600 hover:bg-red-700 text-white h-8 text-[12px] px-4 border-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13, className: "mr-1" }),
          " ",
          isHi ? "डिलीट" : "Delete"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AlertDialogContent,
      {
        "data-ocid": "settings.delete_account.dialog",
        className: "bg-[#1A1F26] border-red-900/40 max-w-sm mx-4",
        children: [
          !deleted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-1", children: [1, 2, 3].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-1 flex-1 rounded-full transition-all",
              style: {
                background: s <= step ? "linear-gradient(90deg, #ef4444, #dc2626)" : "rgba(255,255,255,0.1)"
              }
            },
            s
          )) }),
          step === 1 && !deleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "text-red-400 text-[16px]", children: [
              "⚠️ ",
              isHi ? "अकाउंट डिलीट करें?" : "Delete Account?"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-3 rounded-xl",
                  style: {
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.25)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-red-300 font-semibold mb-2", children: isHi ? "इन्हें हमेशा के लिए मिटा दिया जाएगा:" : "The following will be permanently deleted:" }),
                    [
                      isHi ? "सभी पोस्ट, रील्स और स्टोरीज़" : "All posts, reels, and stories",
                      isHi ? "आपके सभी संदेश और चैट" : "All messages and chat history",
                      isHi ? "आपके फॉलोअर्स और फॉलोइंग" : "Your followers & following list",
                      isHi ? "वॉलेट बैलेंस और KomoCoin" : "Wallet balance & KomoCoins",
                      isHi ? "सभी डेटा और खाता इतिहास" : "All data and account history"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-[12px] mt-0.5", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-red-300/80", children: item })
                    ] }, item))
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white/40 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 11 }),
                isHi ? "IT अधिनियम 2000 के अनुसार डेटा डिलीट होगा" : "Data deletion in accordance with IT Act 2000"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AlertDialogCancel,
                {
                  className: "flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-9 text-[13px]",
                  onClick: resetAll,
                  children: isHi ? "रद्द करें" : "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "settings.delete_account.step1_continue",
                  size: "sm",
                  onClick: () => setStep(2),
                  className: "flex-1 h-9 text-[13px] text-white border-0 bg-red-600 hover:bg-red-700",
                  children: isHi ? "आगे बढ़ें" : "Continue"
                }
              )
            ] })
          ] }),
          step === 2 && !deleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-white text-[15px]", children: isHi ? "आप क्यों जा रहे हैं?" : "Why are you leaving?" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: surveyReason, onValueChange: setSurveyReason, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    "data-ocid": "settings.delete_survey.reason_select",
                    className: "bg-white/5 border-white/10 text-white h-10 text-[13px]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectValue,
                      {
                        placeholder: isHi ? "कारण चुनें (वैकल्पिक)" : "Select a reason (optional)"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: REASONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: r.en,
                    className: "text-white/80 text-[13px]",
                    children: isHi ? r.hi : r.en
                  },
                  r.en
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  "data-ocid": "settings.delete_survey.feedback_input",
                  placeholder: isHi ? "अतिरिक्त प्रतिक्रिया (वैकल्पिक)…" : "Additional feedback (optional)…",
                  value: surveyFeedback,
                  onChange: (e) => setSurveyFeedback(e.target.value),
                  rows: 3,
                  className: "bg-white/5 border-white/10 text-white placeholder:text-white/25 text-[13px] resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setStep(1),
                  className: "flex-1 h-9 text-[13px] border-white/15 text-white/60 hover:bg-white/5",
                  children: isHi ? "वापस" : "Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "settings.delete_account.step2_next",
                  size: "sm",
                  onClick: () => setStep(3),
                  className: "flex-1 h-9 text-[13px] text-white border-0 bg-red-600 hover:bg-red-700",
                  children: isHi ? "अगला" : "Next"
                }
              )
            ] })
          ] }),
          step === 3 && !deleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-red-400 text-[15px]", children: isHi ? "अंतिम पुष्टि करें" : "Final Confirmation" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-white/60", children: isHi ? 'कन्फर्म करने के लिए "DELETE" टाइप करें' : 'Type "DELETE" to confirm' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "settings.delete_account.final_confirm_input",
                    value: deleteText,
                    onChange: (e) => setDeleteText(e.target.value.toUpperCase()),
                    placeholder: "DELETE",
                    className: "bg-white/5 border-white/10 text-white placeholder:text-white/25 h-9 text-[13px] font-mono"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    "data-ocid": "settings.delete_account.understood_checkbox",
                    id: "understood",
                    checked: understood,
                    onCheckedChange: (v) => setUnderstood(!!v),
                    className: "mt-0.5 border-white/30"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "understood",
                    className: "text-[12px] text-white/60 leading-relaxed cursor-pointer",
                    children: isHi ? "मैं समझता/समझती हूं कि 30 दिनों के बाद मेरा सारा डेटा स्थायी रूप से मिटा दिया जाएगा" : "I understand all my data will be permanently deleted after 30 days"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setStep(2),
                  className: "flex-1 h-9 text-[13px] border-white/15 text-white/60 hover:bg-white/5",
                  children: isHi ? "वापस" : "Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "settings.delete_account.final_delete_button",
                  size: "sm",
                  disabled: !canConfirm || deleting,
                  onClick: handleFinalDelete,
                  className: "flex-1 h-9 text-[13px] text-white border-0",
                  style: {
                    background: canConfirm && !deleting ? "#dc2626" : "rgba(220,38,38,0.3)"
                  },
                  children: deleting ? isHi ? "हो रहा है…" : "Deleting…" : isHi ? "हमेशा के लिए डिलीट करें" : "Delete Forever"
                }
              )
            ] })
          ] }),
          deleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96 },
              animate: { opacity: 1, scale: 1 },
              className: "space-y-4 py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "⏳" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-bold text-white", children: isHi ? "अकाउंट डिलीशन शेड्यूल हो गया" : "Account Scheduled for Deletion" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
                      style: {
                        background: "rgba(239,68,68,0.15)",
                        border: "1px solid rgba(239,68,68,0.3)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-bold text-red-400", children: [
                        countdown,
                        " days remaining"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/55 text-center leading-relaxed", children: isHi ? "30 दिनों के भीतर वापस लॉग इन करके डिलीशन रद्द कर सकते हैं।" : "You can log back in within 30 days to cancel deletion." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "settings.delete_account.undo_button",
                      onClick: () => {
                        handleOpen(false);
                        ue.success(
                          isHi ? "अकाउंट डिलीशन रद्द कर दिया गया ✅" : "Account deletion cancelled ✅"
                        );
                      },
                      className: "w-full h-10 text-[13px] font-bold text-white border-0",
                      style: {
                        background: "linear-gradient(135deg, #16a34a, #15803d)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { size: 15, className: "mr-2" }),
                        isHi ? "डिलीशन रद्द करें (Undo)" : "Undo Deletion"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "settings.delete_account.download_data_button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        handleOpen(false);
                        navigate("/privacy-center");
                      },
                      className: "w-full h-9 text-[12px] border-white/15 text-white/60 hover:bg-white/5 flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
                        isHi ? "मेरा डेटा डाउनलोड करें" : "Download My Data"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Settings() {
  const { navigate, logout } = useApp();
  const [lang, setLang] = reactExports.useState("en");
  const [editingProfile, setEditingProfile] = reactExports.useState(false);
  const [displayName, setDisplayName] = reactExports.useState("Komofast User");
  const [username, setUsername] = reactExports.useState("komofast_user");
  const [bio, setBio] = reactExports.useState("Content creator & digital explorer ✨");
  const [changingPassword, setChangingPassword] = reactExports.useState(false);
  const [currentPwd, setCurrentPwd] = reactExports.useState("");
  const [newPwd, setNewPwd] = reactExports.useState("");
  const [confirmPwd, setConfirmPwd] = reactExports.useState("");
  const [privateAccount, setPrivateAccount] = reactExports.useState(false);
  const [whoMessage, setWhoMessage] = reactExports.useState("friends");
  const [whoSeePosts, setWhoSeePosts] = reactExports.useState("everyone");
  const [twoFA, setTwoFA] = reactExports.useState(false);
  const [pushNotif, setPushNotif] = reactExports.useState(true);
  const [emailNotif, setEmailNotif] = reactExports.useState(false);
  const [likeNotif, setLikeNotif] = reactExports.useState(true);
  const [followerNotif, setFollowerNotif] = reactExports.useState(true);
  const [dmNotif, setDmNotif] = reactExports.useState(true);
  const [dataSaver, setDataSaver] = reactExports.useState(false);
  const [autoPlay, setAutoPlay] = reactExports.useState(true);
  const [sensitiveContent, setSensitiveContent] = reactExports.useState(false);
  const [mutedWord, setMutedWord] = reactExports.useState("");
  const [mutedWords, setMutedWords] = reactExports.useState(["spam", "scam"]);
  const MOCK_SESSIONS = [
    {
      id: 1,
      device: "Android • Chrome",
      location: "Mumbai, India",
      icon: Smartphone,
      current: true
    },
    {
      id: 2,
      device: "Windows • Chrome",
      location: "Delhi, India",
      icon: Monitor,
      current: false
    }
  ];
  const MOCK_RESTRICTED = [
    { username: "spammer_99", reason: "Spam" },
    { username: "troll_user", reason: "Harassment" }
  ];
  const [restrictedAccounts, setRestrictedAccounts] = reactExports.useState(MOCK_RESTRICTED);
  const [sessions, setSessions] = reactExports.useState(MOCK_SESSIONS);
  const handleSaveProfile = () => {
    setEditingProfile(false);
    ue.success("Profile updated! ✅");
  };
  const handleSavePassword = () => {
    if (!currentPwd || !newPwd || !confirmPwd) {
      ue.error("Please fill all password fields");
      return;
    }
    if (newPwd !== confirmPwd) {
      ue.error("Passwords don't match");
      return;
    }
    setChangingPassword(false);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    ue.success("Password changed successfully! 🔒");
  };
  const addMutedWord = () => {
    const word = mutedWord.trim().toLowerCase();
    if (!word || mutedWords.includes(word)) return;
    setMutedWords((prev) => [...prev, word]);
    setMutedWord("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.25 },
      className: "max-w-2xl mx-auto px-4 py-4 pb-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "settings.back.button",
              className: "w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors",
              onClick: () => navigate("/profile"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-white leading-tight", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "सेटिंग्स" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "settings.lang.toggle",
              onClick: () => setLang((l) => l === "en" ? "hi" : "en"),
              className: "px-3 py-1.5 rounded-full text-[12px] font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors",
              children: lang === "en" ? "हिंदी" : "English"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Account Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingRow,
              {
                ocid: "settings.edit_profile.button",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 15, className: "text-komo-blue" }),
                label: "Edit Profile",
                sublabel: "Name, bio, username",
                onClick: () => setEditingProfile((v) => !v),
                right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-blue", children: editingProfile ? "Cancel" : "Edit" })
              }
            ),
            editingProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.2 },
                className: "px-4 pb-4 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Display Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.name.input",
                        value: displayName,
                        onChange: (e) => setDisplayName(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Username" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.username.input",
                        value: username,
                        onChange: (e) => setUsername(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Bio" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.bio.input",
                        value: bio,
                        onChange: (e) => setBio(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "settings.save_profile.submit_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white w-full h-9 text-[13px]",
                      onClick: handleSaveProfile,
                      children: "Save Changes"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingRow,
              {
                ocid: "settings.change_password.button",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 15, className: "text-komo-purple" }),
                label: "Change Password",
                sublabel: "Update your login password",
                onClick: () => setChangingPassword((v) => !v),
                right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-blue", children: changingPassword ? "Cancel" : "Change" })
              }
            ),
            changingPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                transition: { duration: 0.2 },
                className: "px-4 pb-4 space-y-3",
                children: [
                  [
                    {
                      label: "Current Password",
                      ocid: "settings.current_password.input",
                      val: currentPwd,
                      set: setCurrentPwd
                    },
                    {
                      label: "New Password",
                      ocid: "settings.new_password.input",
                      val: newPwd,
                      set: setNewPwd
                    },
                    {
                      label: "Confirm New Password",
                      ocid: "settings.confirm_password.input",
                      val: confirmPwd,
                      set: setConfirmPwd
                    }
                  ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: f.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": f.ocid,
                        type: "password",
                        value: f.val,
                        onChange: (e) => f.set(e.target.value),
                        className: "bg-white/5 border-white/10 text-white h-9 text-[13px]"
                      }
                    )
                  ] }, f.label)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "settings.save_password.submit_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white w-full h-9 text-[13px]",
                      onClick: handleSavePassword,
                      children: "Update Password"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.mobile.button",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15, className: "text-green-400" }),
              label: "Mobile / Email",
              sublabel: "+91 ••••••7890 · user@komo.app",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "border-white/15 text-white/60 h-7 text-[11px] px-3",
                  onClick: () => ue.info("Mobile/Email update coming soon!"),
                  children: "Update"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 15, className: "text-komo-blue" }),
              label: "Verified Account",
              sublabel: "Your account is verified",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-bold",
                  style: {
                    background: "rgba(47,168,255,0.15)",
                    color: "#2fa8ff",
                    border: "1px solid rgba(47,168,255,0.3)"
                  },
                  children: "✓ Verified"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Privacy & Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.private_account.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15, className: "text-komo-purple" }),
              label: "Private Account",
              sublabel: "Only approved followers can see your posts",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: privateAccount,
                  onCheckedChange: (v) => {
                    setPrivateAccount(v);
                    ue.success(
                      v ? "Account set to private" : "Account set to public"
                    );
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 15, className: "text-komo-blue" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Who can message me" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: whoMessage,
                onValueChange: (v) => {
                  setWhoMessage(v);
                  ue.success("Preference saved");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "settings.who_message.select",
                      className: "w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "everyone",
                        className: "text-white/80 text-[12px]",
                        children: "Everyone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "friends", className: "text-white/80 text-[12px]", children: "Friends only" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nobody", className: "text-white/80 text-[12px]", children: "Nobody" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-green-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Who can see my posts" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: whoSeePosts,
                onValueChange: (v) => {
                  setWhoSeePosts(v);
                  ue.success("Preference saved");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "settings.who_see_posts.select",
                      className: "w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "everyone",
                        className: "text-white/80 text-[12px]",
                        children: "Everyone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "followers",
                        className: "text-white/80 text-[12px]",
                        children: "Followers"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "onlyme", className: "text-white/80 text-[12px]", children: "Only me" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.two_fa.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-yellow-400" }),
              label: "Two-Factor Authentication",
              sublabel: "Extra security for your account",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: twoFA,
                  onCheckedChange: (v) => {
                    setTwoFA(v);
                    ue.success(v ? "2FA enabled" : "2FA disabled");
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { size: 15, className: "text-komo-purple" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Active Sessions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `settings.session.item.${s.id}`,
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 16, className: "text-komo-text-muted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] font-medium text-white/75", children: [
                      s.device,
                      s.current && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-green-400 font-semibold", children: "● Current" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: s.location })
                  ] }),
                  !s.current && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `settings.revoke.button.${s.id}`,
                      size: "sm",
                      variant: "outline",
                      className: "border-red-800/50 text-red-400 hover:bg-red-900/20 h-7 text-[11px] px-3",
                      onClick: () => {
                        setSessions((prev) => prev.filter((x) => x.id !== s.id));
                        ue.success("Session revoked");
                      },
                      children: "Revoke"
                    }
                  )
                ]
              },
              s.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "settings.creator_privacy.link",
              onClick: () => navigate("/creator-privacy"),
              className: "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "✨" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-white/80", children: "Creator Privacy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5", children: "Public visibility for your creator profile" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: [
          {
            id: "push",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 15, className: "text-komo-blue" }),
            label: "Push Notifications",
            sublabel: "App alerts on your device",
            value: pushNotif,
            set: setPushNotif,
            ocid: "settings.push_notif.switch"
          },
          {
            id: "email",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 15, className: "text-yellow-400" }),
            label: "Email Notifications",
            sublabel: "Summaries to your inbox",
            value: emailNotif,
            set: setEmailNotif,
            ocid: "settings.email_notif.switch"
          },
          {
            id: "like",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "❤️" }),
            label: "Likes & Comments",
            sublabel: "When someone reacts to your posts",
            value: likeNotif,
            set: setLikeNotif,
            ocid: "settings.like_notif.switch"
          },
          {
            id: "follower",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "👤" }),
            label: "New Followers",
            sublabel: "When someone follows you",
            value: followerNotif,
            set: setFollowerNotif,
            ocid: "settings.follower_notif.switch"
          },
          {
            id: "dm",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 15, className: "text-komo-purple" }),
            label: "Direct Messages",
            sublabel: "When you receive a new message",
            value: dmNotif,
            set: setDmNotif,
            ocid: "settings.dm_notif.switch"
          }
        ].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: item.ocid,
              icon: item.icon,
              label: item.label,
              sublabel: item.sublabel,
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: item.value,
                  onCheckedChange: (v) => {
                    item.set(v);
                    ue.success(
                      v ? `${item.label} enabled` : `${item.label} disabled`
                    );
                  }
                }
              )
            }
          ),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "App Preferences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { size: 15, className: "text-komo-blue" }),
              label: "Dark Mode",
              sublabel: "Always enabled for best experience",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: true,
                  disabled: true,
                  className: "opacity-60",
                  onCheckedChange: () => ue.info("Dark mode is always on! 🌙")
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.language.link",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-green-400" }),
              label: "Language / भाषा",
              sublabel: "Change app language",
              onClick: () => navigate("/language")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.country.link",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📍" }),
              label: "Country / देश",
              sublabel: "Detect your country automatically",
              onClick: () => navigate("/country-detect")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.data_saver.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 15, className: "text-komo-purple" }),
              label: "Data Saver",
              sublabel: "Reduce video quality to save data",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: dataSaver,
                  onCheckedChange: (v) => {
                    setDataSaver(v);
                    ue.success(v ? "Data Saver on" : "Data Saver off");
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.autoplay.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "▶️" }),
              label: "Auto-play Reels",
              sublabel: "Reels play automatically while scrolling",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: autoPlay,
                  onCheckedChange: (v) => {
                    setAutoPlay(v);
                    ue.success(v ? "Auto-play enabled" : "Auto-play disabled");
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Content & Feeds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.sensitive_content.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-orange-400" }),
              label: "Show Sensitive Content",
              sublabel: "Content that may not be suitable for all audiences",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: sensitiveContent,
                  onCheckedChange: (v) => {
                    setSensitiveContent(v);
                    ue.success(
                      v ? "Sensitive content shown" : "Sensitive content hidden"
                    );
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🔇" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Muted Words" })
            ] }),
            mutedWords.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: mutedWords.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                "data-ocid": "settings.muted_words.panel",
                className: "flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium text-white/70",
                style: {
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)"
                },
                children: [
                  w,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMutedWords((prev) => prev.filter((x) => x !== w)),
                      className: "ml-0.5 text-white/40 hover:text-red-400 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                    }
                  )
                ]
              },
              w
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "settings.muted_word.input",
                  placeholder: "Add a word to mute…",
                  value: mutedWord,
                  onChange: (e) => setMutedWord(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && addMutedWord(),
                  className: "flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "settings.add_muted_word.button",
                  size: "sm",
                  className: "komo-gradient border-0 text-white h-9 px-4 text-[12px]",
                  onClick: addMutedWord,
                  children: "Add"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 15, className: "text-orange-400" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Restricted Accounts" })
            ] }),
            restrictedAccounts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "settings.restricted.empty_state",
                className: "text-[12px] text-komo-text-muted py-1",
                children: "No restricted accounts"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: restrictedAccounts.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `settings.restricted.item.${i + 1}`,
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white",
                      style: {
                        background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(47,168,255,0.4))"
                      },
                      children: acc.username[0].toUpperCase()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] font-medium text-white/75", children: [
                      "@",
                      acc.username
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: acc.reason })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `settings.unrestrict.button.${i + 1}`,
                      size: "sm",
                      variant: "outline",
                      className: "border-green-800/50 text-green-400 hover:bg-green-900/20 h-7 text-[11px] px-3",
                      onClick: () => {
                        setRestrictedAccounts(
                          (prev) => prev.filter((x) => x.username !== acc.username)
                        );
                        ue.success(`@${acc.username} unrestricted`);
                      },
                      children: "Unrestrict"
                    }
                  )
                ]
              },
              acc.username
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Support & Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: [
          {
            label: "Privacy Center / गोपनीयता केंद्र",
            path: "/privacy-center",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 15, className: "text-komo-blue" }),
            ocid: "settings.privacy_center.link"
          },
          {
            label: "Help Center / सहायता केंद्र",
            path: "/help",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 15, className: "text-komo-blue" }),
            ocid: "settings.help.link"
          },
          {
            label: "Privacy Policy",
            path: "/privacy-policy",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🔒" }),
            ocid: "settings.privacy.link"
          },
          {
            label: "Terms & Conditions",
            path: "/terms",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-komo-purple" }),
            ocid: "settings.terms.link"
          },
          {
            label: "Data Protection (IT Act)",
            path: "/data-protection",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-green-400" }),
            ocid: "settings.dataprotection.link"
          },
          {
            label: "Community Guidelines",
            path: "/community-guidelines",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📋" }),
            ocid: "settings.community.link"
          },
          {
            label: "Content Rules",
            path: "/content-rules",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📖" }),
            ocid: "settings.content_rules.link"
          },
          {
            label: "File a Complaint",
            path: "/complaints",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📝" }),
            ocid: "settings.complaints.link"
          }
        ].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": item.ocid,
              onClick: () => navigate(item.path),
              className: "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                    },
                    children: item.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/80", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25" })
              ]
            }
          ),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.path)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Danger Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(251,146,60,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 15, className: "text-orange-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Deactivate Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Temporarily hide your account for 30 days / अकाउंट 30 दिन के लिए छिपाएं" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeactivateDialog, { lang })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(239,68,68,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 15, className: "text-red-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-red-400", children: "Delete Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "30-day grace period — data erased after / 30 दिन बाद डेटा मिटेगा" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAccountFlow, { lang, navigate })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(168,85,247,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 15, className: "text-komo-purple" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Log Out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Sign out of your account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "settings.logout.button",
                size: "sm",
                variant: "outline",
                className: "border-komo-purple/50 text-komo-purple hover:bg-komo-purple/10 h-8 text-[12px] px-4",
                onClick: () => {
                  logout();
                  ue.success("Logged out successfully");
                },
                children: "Log Out"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-white/20 mt-8", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          ". Built with love using",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline hover:text-white/40",
              children: "caffeine.ai"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Settings as default
};
