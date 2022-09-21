<template>
  <b-list-group>
    <b-list-group-item
      id="Excesses"
      v-b-toggle.Excesses-accordion
      button
      :active="this.activeAccordionId == 'Excesses'"
      class="d-flex justify-content-between align-items-center"
      role="tab"
      @click="activate"
    >
      Excesses
      <div>
        <BIconChevronUp v-if="this.activeAccordionId == 'Excesses'" />
        <BIconChevronDown v-else />
      </div>
    </b-list-group-item>
    <b-collapse
      id="Excesses-accordion"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-list-group>
        <b-list-group-item
          button
          class="
            d-flex
            justify-content-between
            align-items-center
            accordion-sub-item
          "
        >
          Desktops
        </b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item
      id="Extensions"
      v-b-toggle.Extensions-accordion
      button
      :active="this.activeAccordionId == 'Extensions'"
      class="d-flex justify-content-between align-items-center"
      role="tab"
      @click="activate"
    >
      Extensions
      <div>
        <BIconChevronUp v-if="this.activeAccordionId == 'Extensions'" />
        <BIconChevronDown v-else />
      </div>
    </b-list-group-item>
    <b-collapse
      id="Extensions-accordion"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-list-group>
        <b-list-group-item
          button
          class="
            d-flex
            justify-content-between
            align-items-center
            accordion-sub-item
          "
        >
          Windows
        </b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item
      id="Endorsements"
      v-b-toggle.Extensions-accordion
      button
      :active="this.activeAccordionId == 'Endorsements'"
      class="d-flex justify-content-between align-items-center"
      role="tab"
      @click="activate"
    >
      Endorsements
      <div>
        <BIconChevronUp v-if="this.activeAccordionId == 'Endorsements'" />
        <BIconChevronDown v-else />
      </div>
    </b-list-group-item>
    <b-collapse
      id="Endorsements-accordion"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-list-group>
        <b-list-group-item
          button
          class="
            d-flex
            justify-content-between
            align-items-center
            accordion-sub-item
          "
        >
          Windows
        </b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item
      id="General-Exuclusions"
      v-b-toggle.Extensions-accordion
      button
      :active="this.activeAccordionId == 'General-Exuclusions'"
      class="d-flex justify-content-between align-items-center"
      role="tab"
      @click="activate"
    >
      General Exuclusions
      <div>
        <BIconChevronUp
          v-if="this.activeAccordionId == 'General-Exuclusions'"
        />
        <BIconChevronDown v-else />
      </div>
    </b-list-group-item>
    <b-collapse
      id="Endorsements-accordion"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-list-group>
        <b-list-group-item
          button
          class="
            d-flex
            justify-content-between
            align-items-center
            accordion-sub-item
          "
        >
          Windows
        </b-list-group-item>
      </b-list-group>
    </b-collapse>

    <b-list-group-item
      id="Policy-Wordings"
      v-b-toggle.Extensions-accordion
      button
      :active="this.activeAccordionId == 'Policy-Wordings'"
      class="d-flex justify-content-between align-items-center"
      role="tab"
      @click="activate"
    >
      Policy Wordings
      <div>
        <BIconChevronUp v-if="this.activeAccordionId == 'Policy-Wordings'" />
        <BIconChevronDown v-else />
      </div>
    </b-list-group-item>
    <b-collapse
      id="Endorsements-accordion"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-list-group>
        <b-list-group-item
          button
          class="
            d-flex
            justify-content-between
            align-items-center
            accordion-sub-item
          "
        >
          Windows
        </b-list-group-item>
      </b-list-group>
    </b-collapse>
  </b-list-group>
</template>

<script>
import {
  BCollapse,
  BListGroup,
  BListGroupItem,
  BIconChevronUp,
  BIconChevronDown,
} from "bootstrap-vue";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  name: "Details",
  components: {
    BCollapse,
    BListGroup,
    BListGroupItem,
    BIconChevronUp,
    BIconChevronDown,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      activeAccordionId: null,
    };
  },
  computed: {},
  methods: {
    activate(event) {
      this.activeAccordionId = event.currentTarget.id;
    },
  },
};
</script>

<style scoped>
.list-group-item-action.active {
  background: linear-gradient(
    118deg,
    #324ca2,
    rgba(50, 76, 162, 0.7)
  ) !important;
}
</style>
