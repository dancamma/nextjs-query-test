import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { Layout } from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="text-2xl">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        dignissim mauris. Mauris vel elit mi. Sed euismod lacus orci. Nam at
        consequat massa. Cras ac purus faucibus, dignissim purus a, fringilla
        dui. Fusce in ultrices dui. Nullam rutrum libero tortor, eget luctus
        arcu posuere feugiat. Nunc scelerisque dignissim magna et efficitur.
        Donec tempus id elit a luctus. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Suspendisse potenti. Vestibulum sollicitudin et
        ipsum sagittis mollis. Aliquam fermentum, ligula et iaculis pharetra,
        arcu odio dignissim eros, vitae egestas metus sapien vehicula velit.
        Donec sit amet pulvinar magna. Phasellus congue ligula ac fringilla
        blandit. Curabitur bibendum nulla at elit tempus scelerisque. Sed
        ullamcorper eros in risus pretium, et vehicula sem mattis. Aenean
        faucibus lectus ut egestas ullamcorper. Donec fermentum leo non nibh
        hendrerit, quis viverra nunc vehicula. Nunc id ex sit amet nunc
        hendrerit vulputate sed sed odio. Suspendisse est eros, lacinia a
        ultrices ut, molestie tincidunt ligula. Vivamus ultricies dapibus nisl
        sodales pretium. Vestibulum vitae pretium eros, vel hendrerit felis.
        Donec viverra ac nisl et hendrerit. Pellentesque condimentum augue a
        risus porttitor tempor. Donec ut pretium ligula. Donec tincidunt
        ultrices felis. Donec hendrerit pharetra est ac scelerisque. Integer id
        volutpat nibh, quis semper orci. Phasellus eget est iaculis quam euismod
        auctor. Ut ipsum arcu, tincidunt vitae neque porta, rutrum lacinia ex.
        Aenean pellentesque lobortis libero vitae lobortis. Duis condimentum
        odio mi. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Donec placerat nec lorem ac pharetra.
        Curabitur turpis lorem, luctus id faucibus ac, pharetra vitae nulla.
        Nullam at vehicula enim, aliquam porttitor urna. Curabitur mattis, lorem
        non tincidunt posuere, ante leo mattis mi, et cursus enim dolor vitae
        felis. Vivamus facilisis bibendum augue, in efficitur ipsum sodales sed.
        Fusce aliquet vitae justo ut maximus. Vestibulum molestie efficitur sem,
        et fermentum magna interdum id. Praesent scelerisque metus a sem
        facilisis pulvinar. Duis vel magna sodales, rutrum erat at, ultricies
        odio. Nulla nulla eros, tincidunt sit amet scelerisque molestie,
        sagittis ac erat. Phasellus non ligula varius, consectetur lectus at,
        tempor lectus. Nulla blandit quam eget egestas malesuada. Curabitur
        dignissim turpis vitae nunc fringilla, ac placerat mi blandit. Phasellus
        laoreet metus in consectetur vulputate. Phasellus efficitur accumsan
        pellentesque. Nulla ullamcorper bibendum tincidunt. Vestibulum euismod
        fringilla accumsan. Quisque nisl elit, tempor id sem vitae, tempus
        sollicitudin arcu. Donec quis tempus dui. Ut molestie, mi a euismod
        tristique, felis lacus pharetra quam, sit amet suscipit massa turpis et
        augue. Nulla magna nunc, dignissim ac lacinia eu, vehicula nec urna.
      </p>
    </div>
  ),
};
